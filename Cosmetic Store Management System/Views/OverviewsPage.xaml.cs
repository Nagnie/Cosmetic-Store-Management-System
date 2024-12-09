using System;
using System.Collections.Generic;
using System.Globalization;
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
using System.Threading.Tasks;
using System.Windows;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using System.Collections.ObjectModel;

namespace Cosmetic_Store_Management_System.Views;

public sealed partial class OverviewsPage : Page
{
    public OverviewsViewModel ViewModel
    {
        get;
    }

    public OverviewsPage()
    {
        ViewModel = new OverviewsViewModel();
        InitializeComponent();
        _= UpdateDateTimeAsync();
    }

    private void MoreAnalytics_Click(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
    {
        // Điều hướng đến trang AnalyticsPage
        Frame.Navigate(typeof(AnalyticsPage));
    }

    private void MoreButton_Click(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
    {
        // Điều hướng đến trang ProductDataPage
        Frame.Navigate(typeof(ProductDataPage));
    }

    private void OnProductClick(object sender, RoutedEventArgs e)
    {
        // Retrieve the selected product by accessing the DataContext of the button's parent item
        var button = sender as Button;
        if (button?.DataContext is Cosmetic selectedCosmetic)
        {
            // Navigate to ProductPage and pass the selected product
            Frame.Navigate(typeof(ProductPage), selectedCosmetic);
        }
    }
    private async Task UpdateDateTimeAsync()
    {
        while (true)
        {
            txtTime.Text = DateTime.Now.ToString("dd MMMM yyyy, dddd", CultureInfo.InvariantCulture);

            // Set greeting based on the current hour
            int hour = DateTime.Now.Hour;
            if (hour < 12)
            {
                txtGreeting.Text = "Good morning!";
            }
            else if (hour < 18)
            {
                txtGreeting.Text = "Good afternoon!";
            }
            else
            {
                txtGreeting.Text = "Good evening!";
            }

            await Task.Delay(1000); // Update every second
        }
    }

    private void UpdateNotificationBadge()
    {
        var lowStockProducts = ViewModel.Cosmetics.Where(c => c.Quantity <= 10).ToList();
        if (lowStockProducts.Count > 0)
        {
            NotificationBadge.Visibility = Visibility.Visible;
            NotificationCountText.Text = lowStockProducts.Count.ToString();
        }
        else
        {
            NotificationBadge.Visibility = Visibility.Collapsed;
        }
    }


    private void OnNotificationClick(object sender, RoutedEventArgs e)
    {
        if (ViewModel.LowStockProducts.Count > 0)
        {
            // Use the Flyout property of the button to show the flyout
            NotificationButton.Flyout.ShowAt(NotificationButton);
        }
        else
        {
            NotificationBadge.Visibility = Visibility.Collapsed;
        }
    }

    private void OnLowStockProductTapped(object sender, TappedRoutedEventArgs e)
    {
        // Get the tapped product (the DataContext of the tapped item)
        var tappedProduct = (Cosmetic)((Grid)sender).DataContext;

        // Navigate to the product details page, passing the selected product
        Frame.Navigate(typeof(ProductPage), tappedProduct);
    }

}
