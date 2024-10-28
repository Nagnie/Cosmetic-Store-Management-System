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
public class SQLLoyalCustomerDAOTest
{
    [TestMethod()]
    public void AddLoyalCustomerTest()
    {
        LoyalCustomer customer = new LoyalCustomer()
        {
            Phone = "0123456789",
            Name = "John Doe",
        };

        Console.WriteLine(customer.Phone);
        ILoyalCustomerDAO dao = new SQLLoyalCustomerDAO();
        dao.AddLoyalCustomer(customer);
    }

    [TestMethod()]
    public void UpdateLoyalCustomerTest()
    {
        LoyalCustomer customer = new LoyalCustomer()
        {
            Phone = "0123456789",
            Name = "John Doe",
            Point = 1000
        };

        ILoyalCustomerDAO dao = new SQLLoyalCustomerDAO();
        dao.UpdateLoyalCustomer(customer);
    }

    [TestMethod()]
    public void GetLoyalCustomerTest()
    {
        ILoyalCustomerDAO dao = new SQLLoyalCustomerDAO();
        LoyalCustomer customer = dao.GetLoyalCustomer("0123456789").Result;
        Console.WriteLine("Customer ID: " + customer.ID);
        Console.WriteLine("Customer Name: " + customer.Name);
        Console.WriteLine("Customer Phone: " + customer.Phone);
        Console.WriteLine("Customer Point: " + customer.Point);
    }

    [TestMethod()]
    public void GetLoyalCustomersTest()
    {
        ILoyalCustomerDAO dao = new SQLLoyalCustomerDAO();
        List<LoyalCustomer> customers = dao.GetLoyalCustomers().Result;

        for (var i = 0; i < customers.Count; i++)
        {
            Console.WriteLine(i + 1);
            Console.WriteLine("Customer ID: " + customers[i].ID);
            Console.WriteLine("Customer Name: " + customers[i].Name);
            Console.WriteLine("Customer Phone: " + customers[i].Phone);
            Console.WriteLine("Customer Point: " + customers[i].Point);
        }
    }

    [TestMethod()]
    public void DeleteLoyalCustomersTest()
    {
        ILoyalCustomerDAO dao = new SQLLoyalCustomerDAO();
        dao.DeleteLoyalCustomer("0123456789");
    }
}