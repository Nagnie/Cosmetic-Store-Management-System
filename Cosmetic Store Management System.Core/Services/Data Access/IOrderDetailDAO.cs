using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public interface IOrderDetailDAO
{
    void AddOrderDetail(OrderDetail orderDetail);
    Task<List<OrderDetail>> GetOrderDetails(int orderID);
    Task<OrderDetail> GetOrderDetail(int ID);
    void UpdateOrderDetail(OrderDetail orderDetail);
    void DeleteOrderDetail(int ID);
}
