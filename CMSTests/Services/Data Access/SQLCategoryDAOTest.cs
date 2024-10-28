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
public class SQLCategoryDAOTest
{
    [TestMethod()]
    public void GetCategoriesTest()
    {
        ICategoryDAO dao = new SQLCategoryDAO();
        List<Category> categories = dao.GetCategories().Result;
        var count = 0;

        foreach (Category category in categories)
        {
            Console.WriteLine(++count);
            Console.WriteLine("Category ID: " + category.ID);
            Console.WriteLine("Category Name: " + category.Name);
            Console.WriteLine("Category Description: " + category.Description);
        }
    }

    [TestMethod()]
    public void GetCategoryTest()
    {
        ICategoryDAO dao = new SQLCategoryDAO();
        Category category = dao.GetCategory(1).Result;
        Console.WriteLine("Category ID: " + category.ID);
        Console.WriteLine("Category Name: " + category.Name);
        Console.WriteLine("Category Description: " + category.Description);
    }

    [TestMethod()]
    public void AddCategoryTest()
    {
        Category category = new Category();
        category.Name = "Powder";
        category.Description = null;
        ICategoryDAO dao = new SQLCategoryDAO();
        dao.AddCategory(category);
    }

    [TestMethod()]
    public void UpdateCategoryTest()
    {
        Category category = new Category();
        category.ID = 1;
        category.Name = "Powder";
        category.Description = null;
        ICategoryDAO dao = new SQLCategoryDAO();
        dao.UpgradeCategory(category);
    }

    [TestMethod()]
    public void DeleteCategoryTest()
    {
        ICategoryDAO dao = new SQLCategoryDAO();
        dao.DeleteCategory(1);
    }

}