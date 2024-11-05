using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Helpers;
using Cosmetic_Store_Management_System.Core.Models;
using Npgsql;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public class SQLCosmeticDAO : ICosmeticDAO
{
    public void AddCosmetic(Cosmetic cosmetic)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
                INSERT INTO "COSMETIC" (cosmetic_name, category_id, manufacturer_id, quantity, description, price, image)
                VALUES (@name, @categoryID, @manufacturerID, @quantity, @description, @price, @image)
            """;
        command.Parameters.AddWithValue("name", cosmetic.Name);
        command.Parameters.AddWithValue("categoryID", cosmetic.Category.ID);
        command.Parameters.AddWithValue("manufacturerID", cosmetic.Manufacturer.ID);
        command.Parameters.AddWithValue("quantity", cosmetic.Quantity);
        command.Parameters.AddWithValue("description", cosmetic.Description);
        command.Parameters.AddWithValue("price", cosmetic.Price);
        command.Parameters.AddWithValue("image", cosmetic.Image);

        command.ExecuteNonQuery();
        connection.Close();

        Console.WriteLine("Inserted successfully!");
    }
    public void DeleteCosmetic(int ID)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                DELETE FROM "COSMETIC" 
                WHERE cosmetic_id = {ID}
            """;

        command.ExecuteNonQuery();

        connection.Close();
    }
    public Cosmetic GetCosmetic(int ID)
    {
        Cosmetic cosmetic = null;
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
            SELECT * 
            FROM "COSMETIC" cos JOIN "CATEGORY" cat ON cos.category_id = cat.category_id
                              JOIN "MANUFACTURER" man ON cos.manufacturer_id = man.manufacturer_id
            WHERE cosmetic_id = {ID}
            """;

        NpgsqlDataReader reader = command.ExecuteReader();

        while (reader.Read()) {
            cosmetic = new Cosmetic()
            {
                ID = (int)reader["cosmetic_id"],
                Name = (string)reader["cosmetic_name"],
                Description = (string)reader["description"],
                Category = new Category() {
                    ID = (int)reader["category_id"],
                    Name = (string)reader["category_name"],
                    Description = (string)reader["description"],
                },
                Manufacturer = new Manufacturer() {
                    ID = (int)reader["manufacturer_id"],
                    Name = (string)reader["manufacturer_name"],
                    Description = (string)reader["description"],
                },
                Price = (int)reader["price"],
                Quantity = (int)reader["quantity"],
                Image = (string)reader["image"]
            };
        }

        connection.Close();
        return cosmetic;
    }
    public Tuple<List<Cosmetic>, int> GetCosmetics(
        List<int> categoryIDs, 
        List<int> manufacturerIDs, 
        string searchString,
        string sortString,
        int page, int rowsPerPage)
    {
        List<Cosmetic> cosmetics = new List<Cosmetic>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        if (connection.State != System.Data.ConnectionState.Open)
        {
            connection.Open();
        }

        var categoryCondition = categoryIDs != null && categoryIDs.Count > 0 ? 
                    $"WHERE cos.category_id IN ({string.Join(",", categoryIDs.Select(x => x).ToArray())}) " 
                    : "WHERE TRUE ";

        var manufacturerCondition = manufacturerIDs != null && manufacturerIDs.Count > 0 ?
                    $"AND cos.manufacturer_id IN ({string.Join(",", manufacturerIDs.Select(x => x).ToArray())}) "
                    : "AND TRUE ";

        var nameCondition = searchString.Length > 0 
                    ? $"AND cos.cosmetic_name ILIKE '%{searchString}%' " 
                    : "";

        var whereCommand = categoryCondition + manufacturerCondition + nameCondition;

        var orderByCommand = $"ORDER BY {sortString} ";

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
           SELECT count(*) over() as Total, cos.cosmetic_id, cos.cosmetic_name, cos.description, cos.price, cos.quantity, cos.image,
            cat.category_id, cat.category_name, cat.description,
            man.manufacturer_id, man.manufacturer_name, man.description
           FROM "COSMETIC" cos JOIN "CATEGORY" cat ON cos.category_id = cat.category_id
                             JOIN "MANUFACTURER" man ON cos.manufacturer_id = man.manufacturer_id
           {whereCommand}
           {orderByCommand}
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
            Cosmetic cosmetic = new Cosmetic()
            {
                ID = (int)reader["cosmetic_id"],
                Name = (string)reader["cosmetic_name"],
                Description = (string)reader["description"],
                Category = new Category()
                {
                    ID = (int)reader["category_id"],
                    Name = (string)reader["category_name"],
                    Description = (string)reader["description"],
                },
                Manufacturer = new Manufacturer()
                {
                    ID = (int)reader["manufacturer_id"],
                    Name = (string)reader["manufacturer_name"],
                    Description = (string)reader["description"],
                },
                Price = (int)reader["price"],
                Quantity = (int)reader["quantity"],
                Image = (string)reader["image"]
            };
            
            cosmetics.Add(cosmetic);
        }

        connection.Close();
        return new Tuple<List<Cosmetic>, int>(
            cosmetics, count
        );
    }
    public void UpdateCosmetic(Cosmetic cosmetic)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
                UPDATE "COSMETIC"
                SET cosmetic_name = @name, category_id = @categoryID, manufacturer_id = @manufacturer_id,
                    quantity = @quantity, description = @description, price = @price, image = @image
                WHERE cosmetic_id = @id
            """;

        command.Parameters.AddWithValue("id", cosmetic.ID);
        command.Parameters.AddWithValue("name", cosmetic.Name);
        command.Parameters.AddWithValue("categoryID", cosmetic.Category.ID);
        command.Parameters.AddWithValue("manufacturerID", cosmetic.Manufacturer.ID);
        command.Parameters.AddWithValue("quantity", cosmetic.Quantity);
        command.Parameters.AddWithValue("description", cosmetic.Description);
        command.Parameters.AddWithValue("image", cosmetic.Image);
        command.Parameters.AddWithValue("price", cosmetic.Price);

        command.ExecuteNonQuery();

        connection.Close();
    }
}
