using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.UI.Xaml.Media.Imaging;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;

namespace Cosmetic_Store_Management_System.ViewModels;
public class OrderDetailsViewModel
{
    public FullObservableCollection<OrderDetail> OrderDetails
    {
        get; set;
    } = new FullObservableCollection<OrderDetail>();

    public FullObservableCollection<ExtraOrderDetailsViewModel> ExtraOrderDetails
    {
        get; set;
    } = new FullObservableCollection<ExtraOrderDetailsViewModel>();

    public Tuple<bool, int> Add(Cosmetic cosmetic)
    {
        if (cosmetic.Quantity == 0)
        {
            return new Tuple<bool, int>(false, 0);
        }

        var item = OrderDetails.FirstOrDefault(od => od.Cosmetic.ID == cosmetic.ID);
        
        if (item != null)
        {
            if (item.Quantity == cosmetic.Quantity)
            {
                return new Tuple<bool, int>(false, 0);
            }

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

        return new Tuple<bool, int>(true, cosmetic.Price);
    }

    public Tuple<bool, int> Increase(OrderDetail orderDetail)
    {
        if (orderDetail.Quantity == orderDetail.Cosmetic.Quantity)
        {
            return new Tuple<bool, int>(false, 0);
        }

        orderDetail.Quantity++;
        orderDetail.SubTotal = orderDetail.Quantity * orderDetail.Cosmetic.Price;

        return new Tuple<bool, int>(true, orderDetail.Cosmetic.Price);
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
