using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cosmetic_Store_Management_System.Core.Models;
public class Cosmetic : INotifyPropertyChanged
{
    public int ID { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public Category Category { get; set; }

    public Manufacturer Manufacturer { get; set; }

    public int Price { get; set; }

    public int Quantity { get; set; }

    public byte[] ImageData { get; set; }

    public event PropertyChangedEventHandler PropertyChanged;
}
