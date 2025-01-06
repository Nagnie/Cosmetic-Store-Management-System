using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Helpers;
using Cosmetic_Store_Management_System.Core.Models;
using Npgsql;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public class SQLCustomerDAO : ICustomerDAO
{   
    public int AddCustomer(Customer Customer)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                INSERT INTO "CUSTOMER" (customer_name, phone, address, point, loyal)
                VALUES ('{Customer.Name}', '{Customer.Phone}', '{Customer.Address}', 0, false)
                RETURNING customer_id
            """;

        var customerId = (int)command.ExecuteScalar();
        connection.Close();
        return customerId;
    }

    public bool CanDeleteCustomer(string phone)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
            SELECT COUNT(*) 
            FROM "CUSTOMER" cu join "ORDERS" o on cu.customer_id = o.customer_id
            WHERE cu.phone = '{phone}'
        """;

        int orderCount = Convert.ToInt32(command.ExecuteScalar());
        connection.Close();

        return orderCount == 0; // Return true if no orders, false otherwise
    }

    public void DeleteCustomer(string phone)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                DELETE FROM "CUSTOMER"
                WHERE phone = '{phone}'
            """;

        command.ExecuteNonQuery();
        connection.Close();
    }
    public Customer GetCustomer(string phone)
    {
        Customer customer = null;
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                SELECT * FROM "CUSTOMER"
                WHERE phone = '{phone}'
            """;

        NpgsqlDataReader reader = command.ExecuteReader();

        while (reader.Read())
        {
            customer = new Customer()
            {
                ID = (int)reader["customer_id"],
                Name = (string)reader["customer_name"],
                Phone = (string)reader["phone"],
                Address = (string)(reader["address"] != null ? reader["address"] : ""),
                Point = (float)reader["point"],
                Loyal = reader["loyal"] != DBNull.Value ? (string)reader["loyal"] : string.Empty,
            };
        }

        connection.Close();
        return customer;
    }
    public List<Customer> GetAllCustomers()
    {
        List<Customer> customers = new List<Customer>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
                SELECT * FROM "CUSTOMER"
            """;

        NpgsqlDataReader reader = command.ExecuteReader();

        while (reader.Read())
        {
            Customer customer = new Customer()
            {
                ID = reader["customer_id"] != DBNull.Value ? (int)reader["customer_id"] : 0,
                Name = reader["customer_name"] != DBNull.Value ? (string)reader["customer_name"] : string.Empty,
                Phone = reader["phone"] != DBNull.Value ? (string)reader["phone"] : string.Empty,
                Address = reader["address"] != DBNull.Value ? (string)reader["address"] : string.Empty,
                Point = reader["point"] != DBNull.Value ? (float)reader["point"] : 0.0f,
                Loyal = reader["loyal"] != DBNull.Value ? (string)reader["loyal"] : string.Empty,
            };
            customers.Add(customer);
        }
        connection.Close();

        return customers;
    }

    public Tuple<List<Customer>, int> GetCustomers(int page, int rowsPerPage)
    {
        List<Customer> customers = new List<Customer>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                SELECT count(*) over() as Total, cus.customer_id, cus.customer_name, cus.phone, cus.address, cus.point, cus.loyal
                FROM "CUSTOMER" cus
                ORDER BY cus.customer_id
                OFFSET @Skip LIMIT @Take;
            """;

        command.Parameters.AddWithValue("@Skip", (page - 1) * rowsPerPage);
        command.Parameters.AddWithValue("@Take", rowsPerPage);

        NpgsqlDataReader reader = command.ExecuteReader();
        int count = -1;

        while (reader.Read())
        {
            if (count == -1)
            {
                count = Convert.ToInt32(reader["Total"]);
            }
            Customer customer = new Customer()
            {
                ID = reader["customer_id"] != DBNull.Value ? (int)reader["customer_id"] : 0,
                Name = reader["customer_name"] != DBNull.Value ? (string)reader["customer_name"] : string.Empty,
                Phone = reader["phone"] != DBNull.Value ? (string)reader["phone"] : string.Empty,
                Address = reader["address"] != DBNull.Value ? (string)reader["address"] : string.Empty,
                Point = reader["point"] != DBNull.Value ? (float)reader["point"] : 0,
                Loyal = reader["loyal"] != DBNull.Value ? (string)reader["loyal"] : string.Empty
            };
            customers.Add(customer);
        }

        connection.Close();
        return new Tuple<List<Customer>, int>(
            customers, count
        );
    }
    public void UpdateCustomer(Customer loyalCustomer)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                UPDATE "CUSTOMER"
                SET customer_name = @name, point = @point
                WHERE phone = @phone
            """;

        command.Parameters.AddWithValue("name", loyalCustomer.Name);
        command.Parameters.AddWithValue("point", loyalCustomer.Point);
        command.Parameters.AddWithValue("phone", loyalCustomer.Phone);

        command.ExecuteNonQuery();
        connection.Close();
    }

    public bool CustomerExists(string name, string phone)
    {
        using var connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
            SELECT COUNT(1)
            FROM "CUSTOMER"
            WHERE customer_name = @name AND phone = @phone
        """;
        command.Parameters.AddWithValue("@name", name);
        command.Parameters.AddWithValue("@phone", phone);

        int count = Convert.ToInt32(command.ExecuteScalar());
        connection.Close();

        return count > 0;
    }

    public void EditCustomer(Customer customer)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                UPDATE "CUSTOMER"
                SET customer_name = @name, phone = @phone
                WHERE customer_id = @id
            """;
        command.Parameters.AddWithValue("@name", customer.Name);
        command.Parameters.AddWithValue("@phone", customer.Phone);
        command.Parameters.AddWithValue("@id", customer.ID);
        command.ExecuteNonQuery();
        connection.Close();
    }

    public int GetCustomerCount()
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();
        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
                SELECT COUNT(*)
                FROM "CUSTOMER"
            """;
        var count = (int)(Int64)command.ExecuteScalar();
        connection.Close();
        return count;
    }

    public Customer GetCustomerById(int ID)
    {
        Customer customer = null;
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                SELECT * FROM "CUSTOMER"
                WHERE customer_id = '{ID}'
            """;

        NpgsqlDataReader reader = command.ExecuteReader();

        while (reader.Read())
        {
            customer = new Customer()
            {
                ID = (int)reader["customer_id"],
                Name = (string)reader["customer_name"],
                Phone = (string)reader["phone"],
                Address = (string)(reader["address"] != null ? reader["address"] : ""),
                Point = (float)reader["point"],
                Loyal = reader["loyal"] != DBNull.Value ? (string)reader["loyal"] : string.Empty,
            };
        }

        connection.Close();
        return customer;
    }
}
