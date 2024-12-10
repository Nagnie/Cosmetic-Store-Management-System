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
using Windows.Storage;

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
            var hour = DateTime.Now.Hour;
            var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];

            if (hour < 12)
            {
                txtGreeting.Text = language.Equals("en-US") ? "Good morning!" : "Chào buổi sáng!";
            }
            else if (hour < 18)
            {
                txtGreeting.Text = language.Equals("en-US") ?  "Good afternoon!" : "Chào buổi chiều!";
            }
            else
            {
                txtGreeting.Text = language.Equals("en-US") ? "Good evening!" : "Chào buổi tối!";
            }

            await Task.Delay(1000); // Update every second
        }
    }
}
