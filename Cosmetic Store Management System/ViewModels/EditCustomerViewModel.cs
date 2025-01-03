using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;

namespace Cosmetic_Store_Management_System.ViewModels;

public class EditCustomerViewModel
{
    public Customer Customer
    {
        get; set;
    } = new Customer();

    public ICustomerDAO dao
    {
        get;
    } = new SQLCustomerDAO();

    public void EditCustomer()
    {
        dao.EditCustomer(Customer);
    }
}
