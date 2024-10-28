using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public interface IOrderDAO
{
    void AddOrder(Order order);
    Task<List<Order>> GetOrders();
    Task<Order> GetOrder(int ID);
    void UpdateOrder(Order order);
    void DeleteOrder(int ID);
}
