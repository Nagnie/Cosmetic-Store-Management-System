using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;

namespace Cosmetic_Store_Management_System.ViewModels;

public class PageInfo : INotifyPropertyChanged
{
    public int Page
    {
        get; set;
    }
    public int Total
    {
        get; set;
    }

    public event PropertyChangedEventHandler PropertyChanged;
}
