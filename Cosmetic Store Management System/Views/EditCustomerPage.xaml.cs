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
using Windows.Storage;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace Cosmetic_Store_Management_System.Views;

public sealed partial class EditCustomerPage : Page
{
    public EditCustomerPage()
    {
        this.InitializeComponent();
    }

    public EditCustomerViewModel ViewModel
    {
        get;
    } = new EditCustomerViewModel();

    protected override void OnNavigatedTo(NavigationEventArgs e)
    {
        base.OnNavigatedTo(e);
        if (e.Parameter is Customer customer)
        {
            ViewModel.Customer = customer;
        }
    }

    private bool IsValidPhone(string phone)
    {
        // Example validation: Check if the phone contains only digits and has 10 characters
        return phone.Length == 10 && phone.All(char.IsDigit);
    }


    private async void saveButton_Click(object sender, RoutedEventArgs e)
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];

        string name = ViewModel.Customer.Name;
        string phone = ViewModel.Customer.Phone;

        // Validation checks
        if (string.IsNullOrWhiteSpace(name))
        {
            var errorDialog = new ContentDialog
            {
                Title = language.Equals("en-US") ? "Validation Error" : "Lỗi tính hợp lệ",
                Content = language.Equals("en-US") ? "Name cannot be empty." : "Tên không thể để trống.",
                PrimaryButtonText = "OK",
                XamlRoot = this.Content.XamlRoot
            };

            await errorDialog.ShowAsync();
            return;
        }

        if (string.IsNullOrWhiteSpace(phone) || !IsValidPhone(phone))
        {
            var errorDialog = new ContentDialog
            {
                Title = language.Equals("en-US") ? "Validation Error" : "Lỗi tính hợp lệ",
                Content = language.Equals("en-US") ? "Phone number is invalid. Please enter a valid phone number." 
                : "Số điện thoại không hợp lệ. Hãy nhập một số điện thoại hợp lệ.",
                PrimaryButtonText = "OK",
                XamlRoot = this.Content.XamlRoot
            };

            await errorDialog.ShowAsync();
            return;
        }
        

        if (!ViewModel.dao.CanDeleteCustomer(ViewModel.Customer.Phone))
        {
            var errorDialog = new ContentDialog
            {
                Title = language.Equals("en-US") ? "Update Customer" : "Cập nhật khách hàng",
                Content = language.Equals("en-US")
                    ? "This customer cannot be updated because they have already existed."
                    : "Không thể cập nhật vì thông tin khách hàng đã tồn tại.",
                CloseButtonText = "OK",
                XamlRoot = this.Content.XamlRoot
            };
            await errorDialog.ShowAsync();
            return;
        }

        ViewModel.dao.EditCustomer(ViewModel.Customer);

        
        var dialog = new ContentDialog();

        if (language.Equals("en-US"))
        {
            dialog.Title = "Success";
            dialog.Content = "The customer has been updated successfully!";
            dialog.PrimaryButtonText = "OK";
        }
        else
        {
            dialog.Title = "Thành công";
            dialog.Content = "Khách hàng đã được cập nhật thành công!";
            dialog.PrimaryButtonText = "OK";
        }

        dialog.XamlRoot = this.Content.XamlRoot;
        await dialog.ShowAsync();

        this.Frame.Navigate(typeof(CustomerPage));
    }

    private void cancelButton_Click(object sender, RoutedEventArgs e)
    {
        this.Frame.Navigate(typeof(CustomerPage));
    }
}
