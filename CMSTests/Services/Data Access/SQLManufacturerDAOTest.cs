using Microsoft.VisualStudio.TestTools.UnitTesting;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;
using System.Xml;

namespace CMS.Core.Tests;

[TestClass()]
public class SQLManufacturerDAOTest
{
    [TestMethod()]
    public void AddManufacturerTest()
    {
        Manufacturer manufacturer = new Manufacturer()
        {
            Name = "Merzy",
        };

        IManufacturerDAO dao = new SQLManufacturerDAO();
        dao.AddManufacturer(manufacturer);
        Console.WriteLine("Manufacturer added successfully.");
    }

    [TestMethod()]
    public void GetManufacturersTest()
    {
        IManufacturerDAO dao = new SQLManufacturerDAO();
        List<Manufacturer> manufacturers = dao.GetManufacturers().Result;

        for (var i = 0; i < manufacturers.Count; i++)
        {
            Console.WriteLine(i + 1);
            Console.WriteLine("Manufacturer ID: " + manufacturers[i].ID);
            Console.WriteLine("Manufacturer Name: " + manufacturers[i].Name);
            Console.WriteLine("Manufacturer Description: " + manufacturers[i].Description);
        }
    }

    [TestMethod()]
    public void GetManufacturerTest()
    {
        IManufacturerDAO dao = new SQLManufacturerDAO();
        Manufacturer manufacturer = dao.GetManufacturer(1).Result;
        Console.WriteLine("Manufacturer ID: " + manufacturer.ID);
        Console.WriteLine("Manufacturer Name: " + manufacturer.Name);
        Console.WriteLine("Manufacturer Description: " + manufacturer.Description);
    }

    [TestMethod()]
    public void UpdateManufacturerTest()
    {
        Manufacturer manufacturer = new Manufacturer()
        {
            ID = 5,
            Name = "Merzy",
            Description = """
                    MERZY the make-up brand with unique freedom MERZY was born
                    in 2016 in the South Korean capital, Seoul.
                """
        };

        IManufacturerDAO dao = new SQLManufacturerDAO();
        dao.UpdateManufacturer(manufacturer);
        Console.WriteLine("Manufacturer updated successfully.");
    }

    [TestMethod()]
    public void DeleteManufacturerTest()
    {
        IManufacturerDAO dao = new SQLManufacturerDAO();
        dao.DeleteManufacturer(5);
    }
}