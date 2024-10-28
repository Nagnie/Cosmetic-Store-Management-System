using Microsoft.VisualStudio.TestTools.UnitTesting;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;

namespace CMS.Core.Tests;

[TestClass()]
public class SQLCosmeticDAOTest
{
    [TestMethod()]
    public void AddCosmeticTest()
    {
        Cosmetic cosmetic = new Cosmetic()
        {
            ID = 2,
            Name = "Kem nền JudyDoll",
            Category = new Category()
            {
                ID = 1
            },
            Manufacturer = new Manufacturer()
            {
                ID = 19
            },
            Price = 230000,
            Description = "",
            Image = ""
        };

        ICosmeticDAO dao = new SQLCosmeticDAO();
        dao.AddCosmetic(cosmetic);
        Console.WriteLine("Inserted successfully!");
    }

    [TestMethod()]
    public void GetCosmeticsTest()
    {
        ICosmeticDAO dao = new SQLCosmeticDAO();
        List<Cosmetic> cosmetic = dao.GetCosmetics().Result;

        for (var i = 0; i < cosmetic.Count; i++)
        {
            Console.WriteLine(i + 1);
            Console.WriteLine("Cosmetic ID: " + cosmetic[i].ID);
            Console.WriteLine("Cosmetic Name: " + cosmetic[i].Name);
            Console.WriteLine("Cosmetic Description: " + cosmetic[i].Description);
            Console.WriteLine("Cosmetic Category ID: " + cosmetic[i].Category.ID);
            Console.WriteLine("Cosmetic Category Name: " + cosmetic[i].Category.Name);
            Console.WriteLine("Cosmetic Manufacturer Name: " + cosmetic[i].Manufacturer.Name);
            Console.WriteLine("Cosmetic Price: " + cosmetic[i].Price);
            Console.WriteLine("Cosmetic Quantity: " + cosmetic[i].Quantity);
            Console.WriteLine("Cosmetic Image: " + cosmetic[i].Image);
        }
    }

    [TestMethod()]
    public void GetCosmeticTest()
    {
        ICosmeticDAO dao = new SQLCosmeticDAO();
        Cosmetic cosmetic = dao.GetCosmetic(1).Result;
        Console.WriteLine("Cosmetic ID: " + cosmetic.ID);
        Console.WriteLine("Cosmetic Name: " + cosmetic.Name);
        Console.WriteLine("Cosmetic Description: " + cosmetic.Description);
        Console.WriteLine("Cosmetic Category Name: " + cosmetic.Category.Name);
        Console.WriteLine("Cosmetic Manufacturer Name: " + cosmetic.Manufacturer.Name);
        Console.WriteLine("Cosmetic Price: " + cosmetic.Price);
        Console.WriteLine("Cosmetic Quantity: " + cosmetic.Quantity);
        Console.WriteLine("Cosmetic Image: " + cosmetic.Image);
    }

    [TestMethod()]
    public void UpdateCosmeticTest()
    {
        Cosmetic cosmetic = new Cosmetic()
        {
            ID = 2,
            Name = "Mood Vegan Glow Cushion",
            Category = new Category() {
                ID = 7
            },
            Manufacturer = new Manufacturer()
            {
                ID = 6
            },
            Price = 480000,
            Description = "",
            Image = "",
            Quantity = 199
        };

        ICosmeticDAO dao = new SQLCosmeticDAO();
        dao.UpdateCosmetic(cosmetic);
    }

    [TestMethod()]
    public void DeleteCosmeticTest()
    {
        ICosmeticDAO dao = new SQLCosmeticDAO();
        dao.DeleteCosmetic(2);
    }
}