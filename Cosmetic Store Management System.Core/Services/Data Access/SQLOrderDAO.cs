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
}
