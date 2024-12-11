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
/// <summary>
/// An empty page that can be used on its own or navigated to within a Frame.
/// </summary>
public sealed partial class CustomerPage : Page
{
    public CustomerPage()
    {
        
        this.InitializeComponent();
    }

    public CustomerViewModel ViewModel
    {
        get;
    } = new CustomerViewModel();

    private void nextButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.GoToNextPage();
    }

    private void previousButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.GoToPreviousPage();
    }

    bool init = false;
    private void pagesComboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
    {
        if (init == false)
        {
            init = true;
            return;
        }
        if (pagesComboBox.SelectedIndex >= 0)
        {
            var item = pagesComboBox.SelectedItem as PageInfo;
            ViewModel.GoToPage(item.Page);
        }
    }
    private async void deleteButton_Click(object sender, RoutedEventArgs e)
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        var dialog = new ContentDialog();

        if (language.Equals("en-US"))
        {
            dialog.Title = "Delete Customer";
            dialog.Content = "Are you sure you want to delete this customer?";
            dialog.PrimaryButtonText = "No";
            dialog.SecondaryButtonText = "Yes";
        }
        else
        {
            dialog.Title = "Xóa khách hàng";
            dialog.Content = "Bạn có chắc chắn muốn xóa khách hàng này không?";
            dialog.PrimaryButtonText = "Không";
            dialog.SecondaryButtonText = "Có";
        }

        dialog.SecondaryButtonStyle = (Style)Application.Current.Resources["AccentButtonStyle"];
        dialog.XamlRoot = this.Content.XamlRoot;
        var result = await dialog.ShowAsync();

        if (result == ContentDialogResult.Secondary)
        {
            var button = sender as Button;
            var customer = button?.DataContext as Customer;
            ViewModel.dao.DeleteCustomer(customer.Phone);
            ViewModel.LoadData();
        }
    }
}
