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
    
    public CustomerInforViewModel CustomerInforViewModel
    {
        get; set;
    } = new CustomerInforViewModel();

    public int SubTotal
    {
        get; set;
    }
    public int CustomerPoints => (int)CustomerInforViewModel.Customer.Point;

    public float DiscountRate
    {
        get; set;
    }

    public int Discount => (int)(SubTotal * DiscountRate);

    public int SaleTax => (int)(SubTotal * SALE_TAX_RATE);

    public int Total => SubTotal - Discount + SaleTax;

    public event PropertyChangedEventHandler? PropertyChanged;

    public void Update(int delta)
    {
        SubTotal += delta;
    }

    public Tuple<int, int, int, int> GetPaymentInfo()
    {
        return new Tuple<int, int, int, int>(SubTotal, Discount, SaleTax, Total);
    }

    public void UpdateDiscountRate(int point)
    {
        if (point >= 1000)
        {
            DiscountRate = 0.15f;
        }
        else if (point >= 600)
        {
            DiscountRate = 0.1f;
        }
        else if (point >= 300)
        {
            DiscountRate = 0.08f;
        }
        else if (point >= 150)
        {
            DiscountRate = 0.05f;
        }
    }
}
