using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.ViewModels;
public class CreateOrderViewModel : ObservableRecipient
{
    public ObservableCollection<OrderDetail> OrderDetails
    {
        get; set;
    }
    public CreateOrderViewModel()
    {
        OrderDetails = new ObservableCollection<OrderDetail>()
        {
            new OrderDetail()
            {
                ID = 1,
                Cosmetic = new Cosmetic()
                {
                    ID = 1,
                    Name = "Lipstick",
                    Price = 10
                },
                OrderID = 1,
                Quantity = 2,
                SubTotal = 20
            },

            new OrderDetail()
            {
                ID = 1,
                Cosmetic = new Cosmetic()
                {
                    ID = 1,
                    Name = "Lipstick",
                    Price = 10
                },
                OrderID = 1,
                Quantity = 2,
                SubTotal = 20
            },

            new OrderDetail()
            {
                ID = 1,
                Cosmetic = new Cosmetic()
                {
                    ID = 1,
                    Name = "Lipstick",
                    Price = 10
                },
                OrderID = 1,
                Quantity = 2,
                SubTotal = 20
            },
        };
    }
}
