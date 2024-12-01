using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;

namespace Cosmetic_Store_Management_System.ViewModels;
public class CreateOrderViewModel : ObservableRecipient
{
    public void SaveOrder(Customer customer, Order order, List<OrderDetail> orderDetails)
    {
        IOrderDAO orderDAO = new SQLOrderDAO();
        var orderID = orderDAO.AddOrder(order);

        IOrderDetailDAO orderDetailDAO = new SQLOrderDetailDAO();
        orderDetailDAO.AddOrderDetails(orderID, orderDetails);

        for (var i = 0; i < orderDetails.Count; i++)
        {
            ICosmeticDAO cosmeticDAO = new SQLCosmeticDAO();
            cosmeticDAO.UpdateCosmeticQuantity(orderDetails[i].Cosmetic.ID, 
                - orderDetails[i].Quantity);
        }

        if (customer.ID != -1)
        {
            customer.Point += (int)(order.Total / 1000);
            ICustomerDAO loyalCustomerDAO = new SQLCustomerDAO();
            loyalCustomerDAO.UpdateCustomer(customer);
        }
    }
}
