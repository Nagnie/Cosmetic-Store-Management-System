using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Npgsql;

namespace Cosmetic_Store_Management_System.Core.Helpers;
public class DBConnection
{
    private static NpgsqlConnection connection = null;

    private DBConnection() {}

    public static NpgsqlConnection GetConnection()
    {
        if (connection == null)
        {
            var connectionString = """
                Server=localhost;
                Port=5432;
                User Id=my_postgres;
                Password=1234;
                Database=my_database; 
            """;
            connection = new NpgsqlConnection(connectionString);
        }

        return connection;
    }
}
