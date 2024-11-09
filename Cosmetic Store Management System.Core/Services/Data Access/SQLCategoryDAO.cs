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
            VALUES ('{category.Name}')
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
            SELECT * FROM "CATEGORY"
            """;

        NpgsqlDataReader reader = command.ExecuteReader();

        while (reader.Read())
        {
            Category category = new Category();
            category.ID = reader.GetInt32(0);
            category.Name = reader.GetString(1);
            category.productCount = reader.GetInt32(2);
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
            SELECT count(*) over() as Total, cat.category_id, cat.category_name, cat.product_count
            FROM "CATEGORY" cat
            OFFSET @Skip LIMIT @Take;
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
                productCount = (int)reader["product_count"]
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
            SELECT * FROM "CATEGORY" WHERE category_id = {ID}";
            """;

        NpgsqlDataReader reader = command.ExecuteReader();

        while (reader.Read()) {
            category.ID = reader.GetInt32(0);
            category.Name = reader.GetString(1);
            category.productCount = reader.GetInt32(2);
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
            SET category_name = '{category.Name}', product_count = '{category.productCount}'
            WHERE category_id = {category.ID}
         """;

        command.ExecuteNonQuery();

        connection.Close();
    }
}
