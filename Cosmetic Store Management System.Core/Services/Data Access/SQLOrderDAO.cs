using System.Diagnostics;
using Cosmetic_Store_Management_System.Core.Helpers;
using Cosmetic_Store_Management_System.Core.Models;
using Npgsql;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public class SQLOrderDAO : IOrderDAO
{
    public int AddOrder(Order order)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
                INSERT INTO "ORDERS" (customer_id, subtotal, discount, sale_tax, total)
                VALUES (@customerID, @subtotal, @discount, @saleTax, @total)
                RETURNING order_id
            """;

        command.Parameters.AddWithValue("customerID", order.Customer?.ID == -1 ? (object)DBNull.Value : order.Customer.ID);
        command.Parameters.AddWithValue("subtotal", order.SubTotal);
        command.Parameters.AddWithValue("discount", order.Discount);
        command.Parameters.AddWithValue("saleTax", order.SaleTax);
        command.Parameters.AddWithValue("total", order.Total);

        var orderID = (int)command.ExecuteScalar();
        connection.Close();

        return orderID;
    }

    public Tuple<List<Order>, int> GetOrders(int page, int rowsPerPage, DateTime? startDate = null, DateTime? endDate = null, string searchString = null)
    {
        if (page < 1) page = 1;
        List<Order> orders = new List<Order>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;

        // Build the query dynamically based on parameters
        var whereClauses = new List<string>();

        if (startDate.HasValue && endDate.HasValue)
        {
            whereClauses.Add("o.order_date BETWEEN @StartDate AND @EndDate");
            command.Parameters.AddWithValue("@StartDate", startDate.Value);
            command.Parameters.AddWithValue("@EndDate", endDate.Value);
        }

        if (!string.IsNullOrWhiteSpace(searchString))
        {
            if (searchString.Equals("Unknown", StringComparison.OrdinalIgnoreCase))
            {
                // Special case for "Unknown"
                whereClauses.Add("o.customer_id IS NULL");
            }
            else
            {
                whereClauses.Add("(cu.customer_name ILIKE @SearchString OR cu.phone ILIKE @SearchString)");
                command.Parameters.AddWithValue("@SearchString", $"%{searchString}%");
            }
        }

        string whereClause = whereClauses.Count > 0 ? "WHERE " + string.Join(" AND ", whereClauses) : "";

        command.CommandText = $"""
        SELECT count(*) over() as TotalOrders, o.order_id, o.customer_id, o.subtotal, o.discount, o.sale_tax, o.total, o.order_date, cu.customer_name, cu.phone
        FROM "ORDERS" o
        LEFT JOIN "CUSTOMER" cu on o.customer_id = cu.customer_id
        {whereClause}
        {(rowsPerPage > 0 ? "OFFSET @Skip LIMIT @Take" : "")};
    """;

        // Add parameters for pagination
        if (rowsPerPage > 0)
        {
            command.Parameters.AddWithValue("@Skip", (page - 1) * rowsPerPage);
            command.Parameters.AddWithValue("@Take", rowsPerPage);
        }

        NpgsqlDataReader reader = command.ExecuteReader();
        int count = -1;

        while (reader.Read())
        {
            if (count == -1)
            {
                count = (int)(long)(reader["TotalOrders"]);
            }

            // Populate the order details
            Order order = new Order()
            {
                ID = Convert.ToInt32(reader["order_id"]),
                Customer = new Customer
                {
                    ID = reader["customer_id"] != DBNull.Value ? Convert.ToInt32(reader["customer_id"]) : 0,
                    Name = reader["customer_name"] != DBNull.Value ? reader["customer_name"].ToString() : "Unknown",
                    Phone = reader["phone"] != DBNull.Value ? reader["phone"].ToString() : "Unknown",
                },
                SubTotal = Convert.ToInt32(reader["subtotal"]),
                Discount = Convert.ToInt32(reader["discount"]),
                SaleTax = Convert.ToInt32(reader["sale_tax"]),
                Total = Convert.ToInt32(reader["total"]),
                OrderTime = (DateTime)reader["order_date"]
            };

            orders.Add(order);
        }

        connection.Close();
        return new Tuple<List<Order>, int>(orders, count);
    }


    public Order GetOrder(int ID)
    {
        Order order = null;
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();
        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
                SELECT *
                FROM "ORDERS"
                WHERE order_id = @orderID
            """;
        command.Parameters.AddWithValue("orderID", ID);
        using var reader = command.ExecuteReader();
        if (reader.Read())
        {
            order = new Order
            {
                ID = (int)reader["order_id"],
                Customer = new Customer
                {
                    ID = (int)reader["customer_id"]
                },
                SubTotal = (int)reader["subtotal"],
                Discount = (int)reader["discount"],
                SaleTax = (int)reader["sale_tax"],
                Total = (int)reader["total"],
                OrderTime = (DateTime)reader["order_date"]
            };
        }
        connection.Close();
        return order;
    }

    public int GetTodayOrderCount()
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();
        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
                SELECT COUNT(*)
                FROM "ORDERS"
                WHERE DATE(order_date) = DATE(NOW())
            """;
        var count = (int)(Int64)command.ExecuteScalar();
        connection.Close();
        return count;
    }

    public int GetLastWeekOrderCount()
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();
        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
                SELECT COUNT(*)
                FROM "ORDERS"
                WHERE order_date >= DATE_TRUNC('week', NOW() - INTERVAL '1 week') + INTERVAL '1 day'
                    AND order_date < DATE_TRUNC('week', NOW())
            """;
        var result = command.ExecuteScalar();
        connection.Close();
        return (int)(Int64)result;
    }

    public List<Revenue> GetRevenues()
    {
        NpgsqlConnection connection = DBConnection.GetConnection();

        try
        {
            connection.Open();
            using var command = new NpgsqlCommand();
            command.Connection = connection;
            command.CommandText = """
                SELECT  EXTRACT(MONTH FROM order_date) AS month, 
                        EXTRACT(YEAR FROM order_date) AS year, 
                        SUM(total) AS total_revenue
                FROM "ORDERS"
                GROUP BY EXTRACT(MONTH FROM order_date), EXTRACT(YEAR FROM order_date)
                ORDER BY year, month 
            """;
            using var reader = command.ExecuteReader();
            List<Revenue> revenues = [];
            while (reader.Read())
            {
                revenues.Add(new Revenue
                {
                    Month = (int)reader.GetDecimal(0),
                    Year = (int)reader.GetDecimal(1),
                    TotalRevenue = 1.0 * (int)reader.GetDecimal(2) / 1e3
                });
            }
            connection.Close();
            return revenues;
        }
        catch (Exception e)
        {
            Debug.WriteLine(e.Message);
            return null;
        }
        finally
        {
            if (connection.State == System.Data.ConnectionState.Open)
            {
                connection.Close();
            }
        }
    }

    public List<(string name, long total)> GetTop5MostRevenueCustomers()
    {

        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();
        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
            SELECT cu.customer_name, SUM(o.total) as total
            FROM "ORDERS" o
            LEFT JOIN "CUSTOMER" cu on o.customer_id = cu.customer_id
            GROUP BY cu.customer_name
            ORDER BY total DESC
            LIMIT 5
        """;
        using var reader = command.ExecuteReader();
        List<(string name, long total)> top5Customers = [];
        while (reader.Read())
        {
            top5Customers.Add((reader["customer_name"].ToString(), (long)reader["total"]));
        }
        connection.Close();
        return top5Customers;
    }
}
