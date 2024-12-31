using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public interface ICustomerDAO
{
    Tuple<List<Customer>, int> GetCustomers(int page, int rowsPerPage);
    int AddCustomer(Customer Customer);
    List<Customer> GetAllCustomers();
    Customer GetCustomer(string phone);
    void UpdateCustomer(Customer Customer);
    void DeleteCustomer(string phone);
    int GetCustomerCount();

    public Customer GetCustomerById(int ID);
}
