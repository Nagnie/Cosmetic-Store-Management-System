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
    public async void AddLoyalCustomer(LoyalCustomer loyalCustomer)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                INSERT INTO "LOYAL_CUSTOMER" (customer_name, phone)
                VALUES ('{loyalCustomer.Name}', '{loyalCustomer.Phone}')
            """;

        await command.ExecuteNonQueryAsync();
        connection.Close();
    }
    public async void DeleteLoyalCustomer(string phone)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                DELETE FROM "LOYAL_CUSTOMER"
                WHERE phone = '{phone}'
            """;

        await command.ExecuteNonQueryAsync();
        connection.Close();
    }
    public async Task<LoyalCustomer> GetLoyalCustomer(string phone)
    {
        LoyalCustomer customer = null;
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                SELECT * FROM "LOYAL_CUSTOMER"
                WHERE phone = '{phone}'
            """;

        var reader = await command.ExecuteReaderAsync();
        var result = await reader.ReadAsync();

        if (result)
        {
            customer = new LoyalCustomer()
            {
                ID = (int)reader["customer_id"],
                Name = (string)reader["customer_name"],
                Phone = (string)reader["phone"],
                Point = (double)reader["point"]
            };
        }

        connection.Close();
        return customer;
    }
    public async Task<List<LoyalCustomer>> GetLoyalCustomers()
    {
        List<LoyalCustomer> customers = new List<LoyalCustomer>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
                SELECT * FROM "LOYAL_CUSTOMER"
            """;

        var reader = await command.ExecuteReaderAsync();

        while (await reader.ReadAsync())
        {
            LoyalCustomer customer = new LoyalCustomer()
            {
                ID = (int)reader["customer_id"],
                Name = (string)reader["customer_name"],
                Phone = (string)reader["phone"],
                Point = (double)reader["point"]
            };
            
            customers.Add(customer);
        }

        return customers;
    }
    public async void UpdateLoyalCustomer(LoyalCustomer loyalCustomer)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                UPDATE "LOYAL_CUSTOMER"
                SET customer_name = @name, point = @point
                WHERE phone = @phone
            """;

        command.Parameters.AddWithValue("name", loyalCustomer.Name);
        command.Parameters.AddWithValue("point", loyalCustomer.Point);
        command.Parameters.AddWithValue("phone", loyalCustomer.Phone);

        await command.ExecuteNonQueryAsync();
        connection.Close();
    }
}
