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
    Order GetOrder(int ID);
    public Tuple<List<Order>, int> GetOrdersByPhoneNumber(string phoneNumber, int page, int rowsPerPage);
    public Tuple<List<Order>, int> GetOrdersByDate(DateTime startDate, DateTime endDate, int page, int rowsPerPage);
    Tuple<List<Order>, int> GetOrders(int page, int rowsPerPage);
    int GetTodayOrderCount();
    int GetLastWeekOrderCount();
    public List<Revenue> GetRevenues();
    List<(string name, long total)> GetTop5MostRevenueCustomers();
}
