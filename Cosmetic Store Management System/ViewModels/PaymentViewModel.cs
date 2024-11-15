using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommunityToolkit.Mvvm.ComponentModel;

namespace Cosmetic_Store_Management_System.ViewModels;

public partial class PaymentViewModel : INotifyPropertyChanged
{
    public const float SALE_TAX_RATE = 0.1f;

    public int SubTotal
    {
        get; set;
    }

    public int Discount
    {
        get; set;
    }

    public int SaleTax => (int)(SubTotal * SALE_TAX_RATE);

    public int Total => SubTotal - Discount + SaleTax;

    public event PropertyChangedEventHandler? PropertyChanged;

    public void Update(int delta)
    {
        SubTotal = SubTotal + delta;
    }

    public Tuple<int, int, int, int> GetPaymentInfo()
    {
        return new Tuple<int, int, int, int>(SubTotal, Discount, SaleTax, Total);
    }
}
