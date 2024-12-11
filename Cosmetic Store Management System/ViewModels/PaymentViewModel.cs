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

    public int Discount
    {
        get
        {
            if (CustomerPoints >= 1000)
            {
                return (int)(SubTotal * 0.15);
            }
            else if(CustomerPoints >= 600)
            {
                return (int)(SubTotal * 0.1);
            }
            else if (CustomerPoints >= 300)
            {
                return (int)(SubTotal * 0.08);
            }
            else if (CustomerPoints >= 150)
            {
                return (int)(SubTotal * 0.05);
            }
            else
            {
                return 0;
            }
        }
    }

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
}
