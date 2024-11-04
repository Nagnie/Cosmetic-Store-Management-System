using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Helpers;
using Cosmetic_Store_Management_System.Core.Models;
using Npgsql;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public class SQLCategoryDAO : ICategoryDAO
{
    public void AddCategory(Category category)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();
        
        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
            INSERT INTO CATEGORY (category_name, description)
            VALUES ('{category.Name}', '{category.Description}')
        """;

        command.ExecuteNonQuery();

        connection.Close();
    }

    public void DeleteCategory(int ID)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
            DELETE FROM CATEGORY WHERE category_id = {ID}
            """;

        command.ExecuteNonQuery();

        connection.Close();
    }

    public List<Category> GetCategories()
    {
        List<Category> categories = new List<Category>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
            SELECT * FROM CATEGORY
            """;

        NpgsqlDataReader reader = command.ExecuteReader();

        while (reader.Read()) {
            Category category = new Category();
            category.ID = reader.GetInt32(0);
            category.Name = reader.GetString(1);
            category.Description = reader.IsDBNull(2) ? null : reader.GetString(2);
            categories.Add(category);
        }

        connection.Close();
        return categories;
    }

    public Category GetCategory(int ID)
    {
        Category category = new Category();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"SELECT * FROM 'CATEGORY' WHERE category_id = {ID}";

        NpgsqlDataReader reader = command.ExecuteReader();

        while (reader.Read()) {
            category.ID = reader.GetInt32(0);
            category.Name = reader.GetString(1);
            category.Description = reader.IsDBNull(2) ? null : reader.GetString(2);
        }

        connection.Close();
        return category;
    }

    public void UpdateCategory(Category category)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
            UPDATE CATEGORY
            SET category_name = '{category.Name}', description = '{category.Description}'
            WHERE category_id = {category.ID}
         """;

        command.ExecuteNonQuery();

        connection.Close();
    }
}
