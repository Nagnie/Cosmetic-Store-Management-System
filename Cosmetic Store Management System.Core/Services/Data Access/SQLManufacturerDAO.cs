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
                INSERT INTO "MANUFACTURER" (manufacturer_name, description)
                VALUES ('{manufacturer.Name}', '{manufacturer.Description}')
            """;

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
            manufacturer.Description = reader.IsDBNull(2) ? null : reader.GetString(2);
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
            SELECT * FROM "MANUFACTURER"
            """;

        var reader = command.ExecuteReader();

        while (reader.Read())
        {
            Manufacturer manufacturer = new Manufacturer();
            manufacturer.ID = reader.GetInt32(0);
            manufacturer.Name = reader.GetString(1);
            manufacturer.Description = reader.IsDBNull(2) ? null : reader.GetString(2);
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
            SELECT count(*) over() as Total, man.manufacturer_id, man.manufacturer_name, man.description
            FROM "MANUFACTURER" man
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
                Description = /*(string)reader["description"]*/ "",
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
                SET manufacturer_name = '{manufacturer.Name}', description = '{manufacturer.Description}'
                WHERE manufacturer_id = {manufacturer.ID}
            """;

        command.ExecuteNonQuery();

        connection.Close();
    }
}
