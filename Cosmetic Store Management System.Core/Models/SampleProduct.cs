using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cosmetic_Store_Management_System.Core.Models;
public class SampleProduct
{
    public string ProductID
    {
        get; set;
    }

    public string ProductName
    {
        get;    set;
    }

    public string StockStatus
    {
        get; set;
    }

    public int Price
    {
        get; set;
    }

    public string Description
    {
        get; set;
    }
    public int Quantity
    {
        get; set;
    }
    public string Category
    {
        get; set;
    }

    public string Manufacturer
    {
        get; set;
    }
    public string ImagePath
    {
        get; set;
    }
}
