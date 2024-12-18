using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.ViewModels;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Controls.Primitives;
using Microsoft.UI.Xaml.Data;
using Microsoft.UI.Xaml.Input;
using Microsoft.UI.Xaml.Media;
using Microsoft.UI.Xaml.Navigation;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.Storage;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace Cosmetic_Store_Management_System.Views;
public sealed partial class OrderDetailsUserControl : UserControl
{
    public delegate void PaymentChangedEventHandler(int delta);
    public event PaymentChangedEventHandler PaymentChanged;

    public OrderDetailsViewModel ViewModel
    {
        get;
    } = new OrderDetailsViewModel();


    public OrderDetailsUserControl()
    {
        this.InitializeComponent();
        ViewModel.OrderDetails.CollectionChanged += OnOrderDetailsChanged;
        UpdateExtraOrderDetails();
    }
    private void OnOrderDetailsChanged(object sender, NotifyCollectionChangedEventArgs e)
    {
        UpdateExtraOrderDetails();
    }

    private void UpdateExtraOrderDetails()
    {
        ViewModel.ExtraOrderDetails.Clear();
        foreach (var detail in ViewModel.OrderDetails)
        {
            ViewModel.ExtraOrderDetails.Add(new ExtraOrderDetailsViewModel
            {
                OrderDetail = detail,
                Cosmetic = detail.Cosmetic
            });
        }
    }

    private async void ShowCantAddItemNotification()
    {
        var localSettings = ApplicationData.Current.LocalSettings;

        if (localSettings.Values["appLanguage"].Equals("en-US"))
        {
            var dialog = new ContentDialog
            {
                Title = "Add Order Detail",
                Content = "Cannot add more items. The quantity exceeds the available stock.",
                CloseButtonText = "Ok",
                XamlRoot = this.XamlRoot
            };

            await dialog.ShowAsync();
        }
        else
        {
            var dialog = new ContentDialog
            {
                Title = "Thêm chi tiết đơn hàng",
                Content = "Số lượng mặt hàng thêm vào đơn hàng đã vượt quá số lượng tồn kho.",
                CloseButtonText = "Ok",
                XamlRoot = this.XamlRoot
            };

            await dialog.ShowAsync();
        }
    }

    public async void AddOrderDetail(Cosmetic cosmetic)
    {
        var (added, delta) = ViewModel.Add(cosmetic);
        if (!added)
        {
            ShowCantAddItemNotification();
        }
        else
        {
            if (PaymentChanged != null)
            {
                PaymentChanged.Invoke(delta);
            }
        }
    }

    private void decreaseButton_Click(object sender, RoutedEventArgs e)
    {
        if ((sender as Button)?.DataContext is OrderDetail orderDetail)
        {
            var delta = ViewModel.Decrease(orderDetail);

            PaymentChanged?.Invoke(delta);
        }
    }

    private void increaseButton_Click(object sender, RoutedEventArgs e)
    {
        if ((sender as Button)?.DataContext is OrderDetail orderDetail)
        {
            var (added, delta) = ViewModel.Increase(orderDetail);

            if (!added)
            {
                ShowCantAddItemNotification();
            }
            else
            {
                PaymentChanged?.Invoke(delta);
            }
        }
    }

    public List<OrderDetail> GetOrderDetails()
    {
        return ViewModel.GetOrderDetails();
    }
}
