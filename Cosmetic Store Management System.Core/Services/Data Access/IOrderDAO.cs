using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;

public interface IOrderDAO
{
    int AddOrder(Order order);
    //List<Order> GetOrders();
    //Order GetOrder(int ID);
    //void UpdateOrder(Order order);
    //void DeleteOrder(int ID);
    int GetTodayOrderCount();
    int GetLastWeekOrderCount();

    public List<Revenue> GetRevenues();
}
