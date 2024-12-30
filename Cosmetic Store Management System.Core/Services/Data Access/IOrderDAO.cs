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
    //void UpdateOrder(Order order);
    //void DeleteOrder(int ID);
    Order GetOrder(int ID);
    Tuple<List<Order>, int> GetOrders(int page, int rowsPerPage, DateTime? startDate = null, DateTime? endDate = null, string searchString = null);
    int GetTodayOrderCount();
    int GetLastWeekOrderCount();
    public List<Revenue> GetRevenues();
}
