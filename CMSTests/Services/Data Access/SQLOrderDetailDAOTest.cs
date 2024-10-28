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
public class SQLOrderDetailDAOTest
{
    [TestMethod()]
    public void AddOrderDetailTest()
    {
        OrderDetail orderDetail = new OrderDetail()
        {
            OrderID = 1,
            Quantity = 2,
            Cosmetic = new Cosmetic()
            {
                ID = 1,
                Name = "Test Cosmetic",
                Price = 100,
                Quantity = 10
            }
        };

        IOrderDetailDAO dao = new SQLOrderDetailDAO();
        dao.AddOrderDetail(orderDetail);
    }

    [TestMethod()]
    public void DeleteOrderDetailTest()
    {
        IOrderDetailDAO dao = new SQLOrderDetailDAO();
        dao.DeleteOrderDetail(1);
    }

    [TestMethod()]
    public void GetOrderDetailTest()
    {
        IOrderDetailDAO dao = new SQLOrderDetailDAO();
        OrderDetail orderDetail = dao.GetOrderDetail(2).Result;
        Console.WriteLine("Order Detail ID: " + orderDetail.ID);
        Console.WriteLine("Order ID: " + orderDetail.OrderID);
        Console.WriteLine("Quantity: " + orderDetail.Quantity);
        Console.WriteLine("Cosmetic ID: " + orderDetail.Cosmetic.ID);
        Console.WriteLine("Cosmetic Name: " + orderDetail.Cosmetic.Name);
        Console.WriteLine("Cosmetic Price: " + orderDetail.Cosmetic.Price);
        Console.WriteLine("Cosmetic Quantity: " + orderDetail.Cosmetic.Quantity);
        Console.WriteLine("Cosmetic Description: " + orderDetail.Cosmetic.Description);
        Console.WriteLine("Cosmetic Category: " + orderDetail.Cosmetic.Category.Name);
        Console.WriteLine("Cosmetic Manufacturer: " + orderDetail.Cosmetic.Manufacturer.Name);
    }

    [TestMethod()]
    public void GetOrderDetailsTest()
    {
        IOrderDetailDAO dao = new SQLOrderDetailDAO();
        List<OrderDetail> orderDetails = dao.GetOrderDetails(1).Result;

        for (int i = 0; i < orderDetails.Count; i++)
        {
            OrderDetail orderDetail = orderDetails[i];
            Console.WriteLine(i + 1);
            Console.WriteLine("Order Detail ID: " + orderDetail.ID);
            Console.WriteLine("Order ID: " + orderDetail.OrderID);
            Console.WriteLine("Quantity: " + orderDetail.Quantity);
            Console.WriteLine("Cosmetic ID: " + orderDetail.Cosmetic.ID);
            Console.WriteLine("Cosmetic Name: " + orderDetail.Cosmetic.Name);
            Console.WriteLine("Cosmetic Price: " + orderDetail.Cosmetic.Price);
            Console.WriteLine("Cosmetic Quantity: " + orderDetail.Cosmetic.Quantity);
            Console.WriteLine("Cosmetic Description: " + orderDetail.Cosmetic.Description);
            Console.WriteLine("Cosmetic Category: " + orderDetail.Cosmetic.Category.Name);
            Console.WriteLine("Cosmetic Manufacturer: " + orderDetail.Cosmetic.Manufacturer.Name);
        }
    }

    [TestMethod()]
    public void UpdateOrderDetailsTest()
    {
        OrderDetail orderDetail = new OrderDetail()
        {
            ID = 2,
            OrderID = 2,
            Quantity = 20,
            Cosmetic = new Cosmetic()
            {
                ID = 2,
            }
        };

        IOrderDetailDAO dao = new SQLOrderDetailDAO();
        dao.UpdateOrderDetail(orderDetail);
    }
}