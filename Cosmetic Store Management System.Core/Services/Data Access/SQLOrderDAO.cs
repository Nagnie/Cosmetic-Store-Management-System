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
    public void AddOrder(Order order)
    {
        NpgsqlConnection connection = DBConnection.GetConnection();
        connection.Open();

        connection.Close();
    }
    public void DeleteOrder(int ID) => throw new NotImplementedException();
    public Task<Order> GetOrder(int ID) => throw new NotImplementedException();
    public Task<List<Order>> GetOrders() => throw new NotImplementedException();
    public void UpdateOrder(Order order) => throw new NotImplementedException();
}
