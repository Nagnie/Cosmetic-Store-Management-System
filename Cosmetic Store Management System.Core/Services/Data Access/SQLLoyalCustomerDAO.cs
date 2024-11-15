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
public class SQLLoyalCustomerDAO : ILoyalCustomerDAO
{
    public int AddLoyalCustomer(LoyalCustomer loyalCustomer)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                INSERT INTO "CUSTOMER" (customer_name, phone, point)
                VALUES ('{loyalCustomer.Name}', '{loyalCustomer.Phone}', 0)
                RETURNING customer_id
            """;

        var customerId = (int)command.ExecuteScalar();
        connection.Close();
        return customerId;
    }
    public void DeleteLoyalCustomer(string phone)
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
    public LoyalCustomer GetLoyalCustomer(string phone)
    {
        LoyalCustomer customer = null;
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                SELECT * FROM "CUSTOMER"
                WHERE phone = '{phone}'
            """;

        var reader = command.ExecuteReader();
        var result = reader.Read();

        if (result)
        {
            customer = new LoyalCustomer()
            {
                ID = (int)reader["customer_id"],
                Name = (string)reader["customer_name"],
                Phone = (string)reader["phone"],
                Point = (float)reader["point"]
            };
        }

        connection.Close();
        return customer;
    }
    public List<LoyalCustomer> GetLoyalCustomers()
    {
        List<LoyalCustomer> customers = new List<LoyalCustomer>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
                SELECT * FROM "CUSTOMER"
            """;

        var reader = command.ExecuteReader();

        while (reader.Read())
        {
            LoyalCustomer customer = new LoyalCustomer()
            {
                ID = (int)reader["customer_id"],
                Name = (string)reader["customer_name"],
                Phone = (string)reader["phone"],
                Point = (float)reader["point"]
            };
            
            customers.Add(customer);
        }

        return customers;
    }
    public void UpdateLoyalCustomer(LoyalCustomer loyalCustomer)
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
}
