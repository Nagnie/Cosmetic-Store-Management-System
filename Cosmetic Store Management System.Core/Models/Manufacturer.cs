using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cosmetic_Store_Management_System.Core.Models;
public class Manufacturer : INotifyPropertyChanged
{
    public int ID { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public event PropertyChangedEventHandler PropertyChanged;
}
