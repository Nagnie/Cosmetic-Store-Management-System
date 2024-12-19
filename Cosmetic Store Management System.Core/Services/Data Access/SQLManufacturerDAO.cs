using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Cosmetic_Store_Management_System.Core.Helpers;
using Cosmetic_Store_Management_System.Core.Models;
using Npgsql;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public class SQLManufacturerDAO : IManufacturerDAO
{
    public void AddManufacturer(Manufacturer manufacturer)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                INSERT INTO "MANUFACTURER" (manufacturer_name, origin)
                VALUES (@name, @origin)
            """;

        command.Parameters.AddWithValue("@name", manufacturer.Name);
        command.Parameters.AddWithValue("@origin", manufacturer.Origin);
        command.ExecuteNonQuery();

        connection.Close();
    }
    public void DeleteManufacturer(int id)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                DELETE FROM "MANUFACTURER" WHERE manufacturer_id = {id}
            """;

        command.ExecuteNonQuery();

        connection.Close();
    }
    public Manufacturer GetManufacturer(int id)
    {
        Manufacturer manufacturer = new Manufacturer();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                SELECT * FROM "MANUFACTURER"
                WHERE manufacturer_id = {id}
            """;

        var reader = command.ExecuteReader();

        while (reader.Read())
        {
            manufacturer.ID = reader.GetInt32(0);
            manufacturer.Name = reader.GetString(1);
            manufacturer.Origin = reader.IsDBNull(2) ? null : reader.GetString(2);
            manufacturer.ProductCount = reader["product_count"] is DBNull ? 0 : Convert.ToInt32(reader["product_count"]);
        }

        connection.Close();
        return manufacturer;
    }

    public List<Manufacturer> GetAllManufacturers()
    {
        List<Manufacturer> manufacturers = new List<Manufacturer>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
            SELECT man.manufacturer_id, man.manufacturer_name, COUNT(cos.quantity) as product_count, man.origin
            FROM "MANUFACTURER" man JOIN "COSMETIC" cos ON man.manufacturer_id = cos.manufacturer_id
            GROUP BY man.manufacturer_id, man.manufacturer_name
            ORDER BY man.manufacturer_id
            """;

        var reader = command.ExecuteReader();

        while (reader.Read())
        {
            Manufacturer manufacturer = new Manufacturer();
            manufacturer.ID = reader.GetInt32(0);
            manufacturer.Name = reader.GetString(1);
            manufacturer.ProductCount = reader["product_count"] is DBNull ? 0 : Convert.ToInt32(reader["product_count"]);
            manufacturer.Origin = (string)reader["origin"];
            manufacturers.Add(manufacturer);
        }

        connection.Close();
        return manufacturers;
    }
    public Tuple<List<Manufacturer>, int> GetManufacturers(int page, int rowsPerPage)
    {
        List<Manufacturer> manufacturers = new List<Manufacturer>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
            SELECT count(*) over() as Total, man.manufacturer_id, man.manufacturer_name, 
                    SUM(cos.quantity) AS product_count, man.origin
            FROM "MANUFACTURER" man LEFT JOIN "COSMETIC" cos ON man.manufacturer_id = cos.manufacturer_id
            GROUP BY man.manufacturer_id, man.manufacturer_name, man.origin
            ORDER BY man.manufacturer_id
            OFFSET @Skip LIMIT @Take;
            """;

        command.Parameters.AddWithValue("@Skip", (page - 1) * rowsPerPage);
        command.Parameters.AddWithValue("@Take", rowsPerPage);

        var reader = command.ExecuteReader();
        int count = -1;

        while (reader.Read())
        {
            if (count == -1)
            {
                count = Convert.ToInt32(reader["Total"]);
            }
            Manufacturer manufacturer = new Manufacturer()
            {
                ID = (int)reader["manufacturer_id"],
                Name = (string)reader["manufacturer_name"],
                ProductCount = reader["product_count"] is DBNull ? 0 : Convert.ToInt32(reader["product_count"]),
                Origin = (string)reader["origin"] ?? string.Empty
            };            
            manufacturers.Add(manufacturer);
        }

        connection.Close();
        return new Tuple<List<Manufacturer>, int>(manufacturers, count);
    }
    public void UpdateManufacturer(Manufacturer manufacturer)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                UPDATE "MANUFACTURER"
                SET manufacturer_name = @name, origin = @origin
                WHERE manufacturer_id = @id
            """;

        command.Parameters.AddWithValue("@name", manufacturer.Name);
        command.Parameters.AddWithValue("@origin", manufacturer.Origin);
        command.Parameters.AddWithValue("@id", manufacturer.ID);
        command.ExecuteNonQuery();

        connection.Close();
    }

    public Manufacturer GetManufacturerByName(string name)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                SELECT *
                FROM "MANUFACTURER"
                WHERE manufacturer_name = @name
            """;

        command.Parameters.AddWithValue("@name", name);
        var result = command.ExecuteReader();

        while (result.Read())
        {
            Manufacturer manufacturer = new Manufacturer()
            {
                ID = (int)result["manufacturer_id"],
                Name = (string)result["manufacturer_name"],
                Origin = (string)result["origin"]
            };
            connection.Close();
            return manufacturer;
        }

        connection.Close();
        return null;
    }

    public int GetManufacturerCount()
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();
        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                SELECT COUNT(*)
                FROM "MANUFACTURER"
            """;
        var count = Convert.ToInt32(command.ExecuteScalar());
        connection.Close();
        return count;
    }
}
