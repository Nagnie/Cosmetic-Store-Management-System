using System;
using System.Collections.Generic;
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

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace Cosmetic_Store_Management_System.Views;
public sealed partial class CustomerInforUserControl : UserControl
{
    public CustomerInforViewModel ViewModel
    {
        get; set;
    } = new CustomerInforViewModel();

    public CustomerInforUserControl()
    {
        this.InitializeComponent();
    }

    private async void searchButton_Click(object sender, RoutedEventArgs e)
    {
        // Check if phone number text box is empty
        if (phoneNumberTextBox.Text.Length == 0)
        {
            ContentDialog notification = new ContentDialog()
            {
                Content = "Please enter the phone number!",
                CloseButtonText = "Cancel",
                XamlRoot = this.XamlRoot
            };

            await notification.ShowAsync();
            return;
        }

        var existed = ViewModel.GetCustomer();

        // Check if customer is not found
        if (existed == false)
        {
            ContentDialog notification = new ContentDialog()
            {
                Content = "Customer not found!",
                CloseButtonText = "Cancel",
                XamlRoot = this.XamlRoot
            };

            await notification.ShowAsync();
            saveCustomerButton.IsEnabled = true;
        }
        else
        {
            saveCustomerButton.IsEnabled = false;
        }
    }

    private async void saveCustomerButton_Click(object sender, RoutedEventArgs e)
    {
        if (phoneNumberTextBox.Text.Length == 0 || nameTextBox.Text.Length == 0)
        {
            ContentDialog dialog = new ContentDialog()
            {
                Content = "Please enter the phone number and customer name!",
                CloseButtonText = "Cancel",
                XamlRoot = this.XamlRoot
            };

            await dialog.ShowAsync();
            return;
        }

        ViewModel.AddCustomer();

        ContentDialog notification = new ContentDialog()
        {
            Content = "Customer information has been saved successfully!",
            CloseButtonText = "OK",
            XamlRoot = this.XamlRoot
        };

        await notification.ShowAsync();
        saveCustomerButton.IsEnabled = false;
    }

    public LoyalCustomer GetCustomer()
    {
        return ViewModel.GetCustomerInfor();
    }
}
