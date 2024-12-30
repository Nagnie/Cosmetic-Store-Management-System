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
public class SQLOrderDetailDAO : IOrderDetailDAO
{
    public void AddOrderDetails(int orderID, List<OrderDetail> orderDetails)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        foreach (var orderDetail in orderDetails) {
            using var command = new NpgsqlCommand();
            command.Connection = connection;
            command.CommandText = $"""
                INSERT INTO "ORDER_DETAIL" (order_id, cosmetic_id, quantity, subTotal)
                VALUES (@orderID, @cosmeticID, @quantity, @subTotal)
            """;

            command.Parameters.AddWithValue("orderID", orderID);
            command.Parameters.AddWithValue("cosmeticID", orderDetail.Cosmetic.ID);
            command.Parameters.AddWithValue("quantity", orderDetail.Quantity);
            command.Parameters.AddWithValue("subTotal", orderDetail.SubTotal);

            command.ExecuteNonQuery();
        }

        connection.Close();
    }

    public void DeleteOrderDetail(int ID)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                DELETE FROM "ORDER_DETAIL"
                WHERE order_detail_id = {ID}
            """;

        command.ExecuteNonQuery();
        connection.Close();
    }
    public OrderDetail GetOrderDetail(int ID)
    {
        OrderDetail orderDetail = null;
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                SELECT o.order_detail_id, o.order_id, o.cosmetic_id, o.quantity, o.subtotal, c.cosmetic_name, c.price, c.quantity, c.image
                FROM "ORDER_DETAIL" o JOIN "COSMETIC" c ON o.cosmetic_id = c.cosmetic_id
                WHERE order_detail_id = {ID}
            """;

        var reader = command.ExecuteReader();
        
        if (reader.Read())
        {
            orderDetail = new OrderDetail()
            {
                ID = (int)reader["order_detail_id"],
                OrderID = (int)reader["order_id"],
                Quantity = (int)reader["quantity"],
                Cosmetic = new Cosmetic()
                {
                    ID = (int)reader["cosmetic_id"],
                    Name = (string)reader["cosmetic_name"],                    
                    Price = (int)reader["price"],
                    Quantity = (int)reader["quantity"],
                    ImageData = (byte[])reader["image"],

                },
                 SubTotal = (int)reader["subtotal"]
            };
        }

        connection.Close();
        return orderDetail;
    }
    public List<OrderDetail> GetOrderDetails(int orderID)
    {
        List<OrderDetail> orderDetails = new List<OrderDetail>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                SELECT o.order_detail_id, o.order_id, o.cosmetic_id, o.quantity, o.subtotal, c.cosmetic_name, c.price, c.quantity, c.image
                FROM "ORDER_DETAIL" o JOIN "COSMETIC" c ON o.cosmetic_id = c.cosmetic_id
                WHERE order_id = {orderID}
            """;

        var reader = command.ExecuteReader();

        while (reader.Read())
        {
            OrderDetail orderDetail = new OrderDetail()
            {
                ID = (int)reader["order_detail_id"],
                OrderID = (int)reader["order_id"],
                Quantity = (int)reader["quantity"],
                Cosmetic = new Cosmetic()
                {
                    ID = (int)reader["cosmetic_id"],
                    Name = (string)reader["cosmetic_name"],                    
                    Price = (int)reader["price"],
                    Quantity = (int)reader["quantity"],
                    ImageData = (byte[])reader["image"]
                },
                SubTotal = (int)reader["subtotal"]
            };

            orderDetails.Add(orderDetail);
        }

        connection.Close();
        return orderDetails;
    }
    public void UpdateOrderDetail(OrderDetail orderDetail)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
                UPDATE "ORDER_DETAIL"
                SET order_id = @orderID, cosmetic_id = @cosmeticID, quantity = @quantity
                WHERE order_detail_id = @orderDetailID
            """;

        command.Parameters.AddWithValue("orderID", orderDetail.OrderID);
        command.Parameters.AddWithValue("cosmeticID", orderDetail.Cosmetic.ID);
        command.Parameters.AddWithValue("quantity", orderDetail.Quantity);
        command.Parameters.AddWithValue("orderDetailID", orderDetail.ID);

        command.ExecuteNonQuery();
        connection.Close();
    }

    public List<(string name, long total)> GetTop5MostPurchasedProducts()
    {
        List<(string name, long total)> topProducts = new List<(string name, long total)>();
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = $"""
            SELECT c.cosmetic_name, SUM(o.quantity) AS total_quantity
            FROM "ORDER_DETAIL" o
            JOIN "COSMETIC" c ON o.cosmetic_id = c.cosmetic_id
            GROUP BY c.cosmetic_name
            ORDER BY total_quantity DESC
            LIMIT 5
        """;

        var reader = command.ExecuteReader();

        while (reader.Read())
        {
            topProducts.Add(((string)reader["cosmetic_name"], (long)reader["total_quantity"]));
        }

        connection.Close();
        return topProducts;
    }


}
