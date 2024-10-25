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

namespace Cosmetic_Store_Management_System.Views;

public sealed partial class OverviewsPage : Page
{
    public ProductDataViewModel ViewModel
    {
        get;
    }

    public OverviewsPage()
    {
        ViewModel = App.GetService<ProductDataViewModel>();
        InitializeComponent();
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
        if (button?.DataContext is SampleProduct selectedProduct)
        {
            // Navigate to ProductPage and pass the selected product
            Frame.Navigate(typeof(ProductPage), selectedProduct);
        }
    }
}
