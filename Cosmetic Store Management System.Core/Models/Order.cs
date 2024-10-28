using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cosmetic_Store_Management_System.Core.Models;
public class Order
{
    public enum OrderStatus
    {
            
    }

    public int ID { get; set; }

    public DateTime OrderTime { get; set; }

    public int SubTotal { get; set; }

    public int Tax { get; set; }

    public int Total { get; set; }

    public int Discount { get; set; }

    public LoyalCustomer Customer { get; set; }

    public OrderStatus Status { get; set; }

    public List<OrderDetail> Details { get; set; }
}
