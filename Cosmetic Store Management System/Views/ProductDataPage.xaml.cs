using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using CommunityToolkit.WinUI.UI;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
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

public sealed partial class ProductDataPage : Page
{
    public ProductDataViewModel ViewModel
    {
        get;
    }
    private void OnProductClick(object sender, RoutedEventArgs e)
    {
        // Retrieve the selected product by accessing the DataContext of the button's parent item
        var button = sender as Button;
        if (button?.DataContext is Cosmetic cosmetic)
        {
            // Navigate to ProductPage and pass the selected product
            this.Frame.Navigate(typeof(ProductPage), cosmetic);
        }
    }

    public ProductDataPage()
    {
        ViewModel = new ProductDataViewModel();
        this.InitializeComponent();
    }

    private void AddNewButton_Click(object sender, RoutedEventArgs e)
    {
        this.Frame.Navigate(typeof(AddNewPage), ViewModel.Cosmetics);
    }
    
    private void categoryItem_Click(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
    {
        var toggleItem = sender as ToggleMenuFlyoutItem;
        var category = toggleItem.DataContext as Category;

        if (toggleItem.IsChecked)
        {
            ViewModel.CategoryIDs.Add(category.ID);
        }
        else
        {
            ViewModel.CategoryIDs.Remove(category.ID);
        }
    }

    private void manufacturerItem_Click(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
    {
        var toggleItem = sender as ToggleMenuFlyoutItem;
        var manufacturer = toggleItem.DataContext as Manufacturer;

        if (toggleItem.IsChecked)
        {
            ViewModel.ManufacturerIDs.Add(manufacturer.ID);
        }
        else
        {
            ViewModel.ManufacturerIDs.Remove(manufacturer.ID);
        }
    }

    private void filterButton_Click(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
    {
        ViewModel.GetCosmetics();
    }
}
