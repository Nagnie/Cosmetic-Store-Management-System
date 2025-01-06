using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using CommunityToolkit;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using Cosmetic_Store_Management_System.Helpers;
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

namespace Cosmetic_Store_Management_System.Views;

public sealed partial class ProductDataPage : Page
{
    public ProductDataViewModel ViewModel
    {
        get;
    } = new ProductDataViewModel();


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
        this.InitializeComponent();
    }

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

    private void AddNewButton_Click(object sender, RoutedEventArgs e)
    {
        // Điều hướng đến trang ProductPage
        Frame.Navigate(typeof(AddCosmeticPage));

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

        if (SearchBox.Text.Length > 0)
        {
            ViewModel.SearchString = SearchBox.Text;
        }
        else
        {
            ViewModel.SearchString = "";
        }

        //ViewModel.GetCosmetics();
        //ViewModel.Search();
        ViewModel.CurrentPage = 1;
        ViewModel.LoadData();
    }

    private void ascIDButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SetSortString("cosmetic_id ASC");
    }

    private void descIDButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SetSortString("cosmetic_id DESC");
    }

    private void descManufacturerButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SetSortString("manufacturer_name DESC");
    }

    private void ascManufacturerButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SetSortString("manufacturer_name ASC");
    }

    private void descCategoryButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SetSortString("category_name DESC");
    }

    private void ascCategoryButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SetSortString("category_name ASC");
    }

    private void descPriceButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SetSortString("price DESC");
    }

    private void ascPriceButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SetSortString("price ASC");
    }

    private void descQuantityButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SetSortString("quantity DESC");
    }

    private void ascQuantityButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SetSortString("quantity ASC");
    }

    private void descNameButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SetSortString("cosmetic_name DESC");
    }

    private void ascNameButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SetSortString("cosmetic_name ASC");
    }

    private async void deleteButton_Click(object sender, RoutedEventArgs e)
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        var dialog = new ContentDialog();

        if (language.Equals("en-US"))
        {
            dialog.Title = "Delete Category";
            dialog.Content = "Are you sure you want to delete this category?";
            dialog.PrimaryButtonText = "No";
            dialog.SecondaryButtonText = "Yes";
        }
        else
        {
            dialog.Title = "Xóa danh mục";
            dialog.Content = "Bạn có chắc chắn muốn xóa danh mục này không?";
            dialog.PrimaryButtonText = "Không";
            dialog.SecondaryButtonText = "Có";
        }
        dialog.SecondaryButtonStyle = (Style)Application.Current.Resources["AccentButtonStyle"];
        dialog.XamlRoot = this.Content.XamlRoot;
        var result = await dialog.ShowAsync();

        if (result == ContentDialogResult.Secondary)
        {
            var button = sender as Button;
            var cosmetic = button?.DataContext as Cosmetic;
            ViewModel.dao.DeleteCosmetic(cosmetic.ID);
            ViewModel.LoadData();

            await new ContentDialog
            {
                XamlRoot = this.Content.XamlRoot,
                Content = language.Equals("en-US") 
                  ? "Product is deleted successfully!" 
                  : "Sản phẩm đã được xóa thành công!",
                CloseButtonText = "OK"
            }.ShowAsync();
        }

    }
}
