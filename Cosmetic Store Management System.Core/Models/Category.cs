using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cosmetic_Store_Management_System.Core.Models;
public class Category : INotifyPropertyChanged
{
    public int ID { get; set; }
    public string Name { get; set; }
    public int ProductCount { get; set; }

    public event PropertyChangedEventHandler PropertyChanged;
}
