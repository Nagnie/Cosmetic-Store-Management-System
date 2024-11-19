using System;
using System.Collections.Generic;
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
using Windows.Services.Store;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace Cosmetic_Store_Management_System.Views;
public sealed partial class ProductListUserControl : UserControl
{
    public delegate void ItemClickHandler(Cosmetic cosmetic);
    public event ItemClickHandler ItemClick;

    public ProductListViewModel ViewModel
    {
        get;
    } = new ProductListViewModel();

    public ProductListUserControl()
    {
        this.InitializeComponent();
    }

    private void GridView_ItemClick(object sender, ItemClickEventArgs e)
    {
        if (ItemClick != null)
        {
            ItemClick.Invoke(e.ClickedItem as Cosmetic);
        }
    }

    private void filterButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SearchString = SearchBox.Text.Length > 0 ? SearchBox.Text : "";
        ViewModel.CurrentPage = 1;
        ViewModel.LoadData();
    }

    private void categoryItem_Click(object sender, RoutedEventArgs e)
    {
        var item = sender as ToggleMenuFlyoutItem;
        var category = item.DataContext as Category;

        if (item.IsChecked)
        {
            ViewModel.AddCategoryID(category.ID);
        }
        else
        {
            ViewModel.RemoveCategoryID(category.ID);
        }
    }

    private void manufacturerItem_Click(object sender, RoutedEventArgs e)
    {
        var item = sender as ToggleMenuFlyoutItem;
        var manufacturer = item.DataContext as Manufacturer;

        if (item.IsChecked)
        {
            ViewModel.AddManufacturerID(manufacturer.ID);
        }
        else
        {
            ViewModel.RemoveManufacturerID(manufacturer.ID);
        }
    }

    bool init = false;
    private void pagesCombobox_SelectionChanged(object sender, SelectionChangedEventArgs e)
    {
        if (init == false)
        {
            init = true;
            return;
        }

        if (pagesCombobox.SelectedIndex >= 0)
        {
            var item = pagesCombobox.SelectedItem as PageInfo;
            ViewModel.GoToPage(item.Page);
        }
    }

    private void prevButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.GoToPrevPage();
    }

    private void nextButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.GoToNextPage();
    }
}
