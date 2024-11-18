using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cosmetic_Store_Management_System.Core.Models;
public class OrderDetail : INotifyPropertyChanged
{
    public int ID
    {
        get; set;
    }

    public Cosmetic Cosmetic 
    {
        get; set;
    }

    public int OrderID
    {
        get; set;
    }

    public int Quantity
    {
        get; set;
    }

    public int SubTotal
    {
        get; set;
    }

    public event PropertyChangedEventHandler PropertyChanged;
}
