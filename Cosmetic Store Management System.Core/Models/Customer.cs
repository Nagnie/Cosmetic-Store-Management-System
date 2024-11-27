using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.UI.Xaml;

namespace Cosmetic_Store_Management_System.Core.Models;
public class Customer : INotifyPropertyChanged
{
    public int ID { get; set; }

    public string Phone { get; set; }

    public string Name { get; set; }

    public string Address
    {
        get; set;
    }

    public float Point { get; set; }

    public string Loyal
    {
        get; set;
    }

    public event PropertyChangedEventHandler PropertyChanged;
}
