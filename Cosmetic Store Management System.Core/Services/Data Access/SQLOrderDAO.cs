using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Helpers;
using Cosmetic_Store_Management_System.Core.Models;
using Npgsql;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public class SQLOrderDAO : IOrderDAO
{
    public int AddOrder(Order order)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        using var command = new NpgsqlCommand();
        command.Connection = connection;
        command.CommandText = """
                INSERT INTO ORDERS (customer_id, subtotal, discount, sale_tax, total)
                VALUES (@customerID, @subtotal, @discount, @saleTax, @total)
                RETURNING order_id
            """;

        command.Parameters.AddWithValue("customerID", order.Customer.ID == -1 ? null : order.Customer.ID);
        command.Parameters.AddWithValue("subtotal", order.SubTotal);
        command.Parameters.AddWithValue("discount", order.Discount);
        command.Parameters.AddWithValue("saleTax", order.SaleTax);
        command.Parameters.AddWithValue("total", order.Total);

        var orderID = (int)command.ExecuteScalar();
        connection.Close();

        return orderID;
    }
}
