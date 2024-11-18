using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;

namespace Cosmetic_Store_Management_System.ViewModels;
public class CustomerInforViewModel : ObservableRecipient
{
    public LoyalCustomer Customer
    {
        get; set;
    } = new LoyalCustomer()
    {
        ID = -1
    };

    public bool GetCustomer()
    {
        ILoyalCustomerDAO DAO = new SQLLoyalCustomerDAO();
        LoyalCustomer customer = DAO.GetLoyalCustomer(Customer.Phone);

        if (customer != null)
        {
            Customer = customer;
            return true;
        }

        return false;
    }

    public void AddCustomer()
    {
        ILoyalCustomerDAO DAO = new SQLLoyalCustomerDAO();
        Customer.ID = DAO.AddLoyalCustomer(Customer);
    }

    public LoyalCustomer GetCustomerInfor()
    {
        return Customer;
    }
}
