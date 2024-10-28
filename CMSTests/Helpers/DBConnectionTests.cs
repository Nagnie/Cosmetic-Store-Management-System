using Microsoft.VisualStudio.TestTools.UnitTesting;
using Cosmetic_Store_Management_System.Core.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Npgsql;

namespace CMS.Core.Tests
{
    [TestClass()]
    public class DBConnectionTests
    {
        [TestMethod()]
        public void GetConnectionTest()
        {
            NpgsqlConnection connection = DBConnection.GetConnection();
            Console.WriteLine("Connection: " + connection);
            connection.Open();
            Console.WriteLine("Opened connection");
            connection.Close();
            Console.WriteLine("Closed connection");
        }
    }
}