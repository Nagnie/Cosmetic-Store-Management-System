using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public interface ILoyalCustomerDAO
{
    void AddLoyalCustomer(LoyalCustomer loyalCustomer);
    Task<List<LoyalCustomer>> GetLoyalCustomers();
    Task<LoyalCustomer> GetLoyalCustomer(string phone);
    void UpdateLoyalCustomer(LoyalCustomer loyalCustomer);
    void DeleteLoyalCustomer(string phone);
}
