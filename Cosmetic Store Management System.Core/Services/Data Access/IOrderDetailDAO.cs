using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public interface IOrderDetailDAO
{
    void AddOrderDetails(int orderID, List<OrderDetail> orderDetails);
    List<OrderDetail> GetOrderDetails(int orderID);
    OrderDetail GetOrderDetail(int ID);
    void UpdateOrderDetail(OrderDetail orderDetail);
    void DeleteOrderDetail(int ID);
    List<(string name, long total)> GetTop5MostPurchasedProducts();
    List<(string name, long totalRevenue)> ProfitableCategories();
    List<(string name, long totalRevenue)> ProfitableManufacturers();
}
