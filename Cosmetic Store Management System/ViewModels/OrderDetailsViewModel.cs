using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;

namespace Cosmetic_Store_Management_System.ViewModels;
public class OrderDetailsViewModel
{
    public FullObservableCollection<OrderDetail> OrderDetails
    {
        get; set;
    } = new FullObservableCollection<OrderDetail>();

    public int Add(Cosmetic cosmetic)
    {
        var item = OrderDetails.FirstOrDefault(od => od.Cosmetic.ID == cosmetic.ID);
        
        if (item != null)
        {
            item.Quantity++;
            item.SubTotal = item.Quantity * item.Cosmetic.Price;
        }
        else
        {
            var orderDetail = new OrderDetail
            {
                Cosmetic = cosmetic,
                Quantity = 1,
                SubTotal = cosmetic.Price
            };
            OrderDetails.Add(orderDetail);
        }

        return cosmetic.Price;
    }

    public int Increase(OrderDetail orderDetail)
    {
        orderDetail.Quantity++;
        orderDetail.SubTotal = orderDetail.Quantity * orderDetail.Cosmetic.Price;
        return orderDetail.Cosmetic.Price;
    }

    public int Decrease(OrderDetail orderDetail)
    {
        if (orderDetail.Quantity == 1)
        {
            OrderDetails.Remove(orderDetail);
        }
        else 
        {
            orderDetail.Quantity--;
            orderDetail.SubTotal = orderDetail.Quantity * orderDetail.Cosmetic.Price;
        }

        return -orderDetail.Cosmetic.Price;
    }

    public List<OrderDetail> GetOrderDetails()
    {
        return OrderDetails.ToList();
    }
}
