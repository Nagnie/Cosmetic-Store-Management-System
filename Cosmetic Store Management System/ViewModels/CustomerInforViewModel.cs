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
    public Customer Customer
    {
        get; set;
    } = new Customer()
    {
        ID = -1
    };

    public bool GetCustomer()
    {
        ICustomerDAO DAO = new SQLCustomerDAO();
        Customer customer = DAO.GetCustomer(Customer.Phone);

        if (customer != null)
        {
            Customer = customer;
            return true;
        }

        return false;
    }

    public void AddCustomer()
    {
        ICustomerDAO DAO = new SQLCustomerDAO();
        Customer.ID = DAO.AddCustomer(Customer);
    }

    public Customer GetCustomerInfor()
    {
        return Customer;
    }
}
