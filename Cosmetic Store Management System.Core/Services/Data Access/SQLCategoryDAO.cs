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
            INSERT INTO "CATEGORY" (category_name)
            VALUES (@name)
        """;

        command.Parameters.AddWithValue("@name", category.Name);
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
            DELETE FROM "CATEGORY" WHERE category_id = {ID}
            """;

        command.ExecuteNonQuery();

        connection.Close();
    }

    public List<Category> GetAllCategories()
    {
        List<Category> categories = new List<Category>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
            SELECT cat.category_id, cat.category_name, COUNT(cos.quantity) as product_count
            FROM "CATEGORY" cat JOIN "COSMETIC" cos ON cat.category_id = cos.category_id
            GROUP BY cat.category_id, cat.category_name
            ORDER BY cat.category_id
        """;

        NpgsqlDataReader reader = command.ExecuteReader();

        while (reader.Read())
        {
            Category category = new Category();
            category.ID = reader.GetInt32(0);
            category.Name = reader.GetString(1);
            category.ProductCount = reader["product_count"] is DBNull ? 0 : Convert.ToInt32(reader["product_count"]);
            categories.Add(category);
        }

        connection.Close();
        return categories;
    }

    public Tuple<List<Category>, int> GetCategories(int page, int rowsPerPage)
    {
        List<Category> categories = new List<Category>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
            SELECT count(*) over() as Total, cat.category_id, cat.category_name, SUM(cos.quantity) as product_count
            FROM "CATEGORY" cat LEFT JOIN "COSMETIC" cos ON cat.category_id = cos.category_id
            GROUP BY cat.category_id, cat.category_name
            ORDER BY cat.category_id
            OFFSET @Skip LIMIT @Take
        """;

        command.Parameters.AddWithValue("@Skip", (page - 1) * rowsPerPage);
        command.Parameters.AddWithValue("@Take", rowsPerPage);

        NpgsqlDataReader reader = command.ExecuteReader();
        int count = -1;

        while (reader.Read()) {
            if (count == -1)
            {
                count = Convert.ToInt32(reader["Total"]);
            }
            Category category = new Category()
            {
                ID = (int)reader["category_id"],
                Name = (string)reader["category_name"],
                ProductCount = reader["product_count"] is DBNull ? 0 : Convert.ToInt32(reader["product_count"])
            };
            categories.Add(category);
        }

        connection.Close();
        return new Tuple<List<Category>, int>(
            categories, count
            );
    }

    public Category GetCategory(int ID)
    {
        Category category = new Category();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
            SELECT cat.*, COUNT(cos.quantity) as product_count
            FROM "CATEGORY" cat LEFT JOIN "COSMETIC" cos ON cat.category_id = cos.category_id
            WHERE category_id = {ID}";
            """;

        NpgsqlDataReader reader = command.ExecuteReader();

        while (reader.Read()) {
            category.ID = reader.GetInt32(0);
            category.Name = reader.GetString(1);
            category.ProductCount = reader["product_count"] is DBNull ? 0 : Convert.ToInt32(reader["product_count"]);
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
            UPDATE "CATEGORY"
            SET category_name = @name
            WHERE category_id = @id
         """;

        command.Parameters.AddWithValue("@name", category.Name);
        command.Parameters.AddWithValue("@id", category.ID);
        command.ExecuteNonQuery();

        connection.Close();
    }

    public Category GetCategoryByName(string name)
    {
        var category = new Category();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();
        
        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
            SELECT *
            FROM "CATEGORY"
            WHERE category_name = @name
        """;
        command.Parameters.AddWithValue("@name", name);
        NpgsqlDataReader reader = command.ExecuteReader();
        
        while (reader.Read())
        {
            category = new Category()
            {
                ID = reader.GetInt32(0),
                Name = reader.GetString(1)
            };

            connection.Close();
            return category;
        }

        connection.Close();
        return null;
    }

    public int GetCategoryCount()
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
            SELECT COUNT(*)
            FROM "CATEGORY"
        """;
        var count = Convert.ToInt32(command.ExecuteScalar());

        connection.Close();
        return count;
    }
}
