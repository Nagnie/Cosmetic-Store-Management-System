using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Controls.Primitives;
using Microsoft.UI.Xaml.Data;
using Microsoft.UI.Xaml.Input;
using Microsoft.UI.Xaml.Media;
using Microsoft.UI.Xaml.Navigation;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.ViewModels;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.Views;

public sealed partial class OrderListPage : Page
{
    public Order SelectedOrder
    {
        get;
        set;
    }
    public OrderListViewModel ViewModel
    {
        get;
    }

    public ExtraOrderListViewModel ExtraOrderListViewModel
    {
        get;
    }

    public OrderListPage()
    {
        ViewModel = new OrderListViewModel();
        this.InitializeComponent();
    }

    private void nextButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.GoToNextPage();
    }

    private void previousButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.GoToPrevPage();
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

    private void FilterButton_Click(object sender, RoutedEventArgs e)
    {
        var startDate = StartDatePicker.Date.Date;
        var endDate = EndDatePicker.Date.Date;
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        ViewModel.CurrentPage = 1;
        if (startDate <= endDate)
        {
            ViewModel.FilterOrdersByDate(startDate, endDate);
        }
        else
        {
            if (language.Equals("en-US"))
            {
                ShowDialog("Invalid Date Range", "The start date must be earlier than or equal to the end date.");
            }
            else if (language.Equals("vi-VN"))
            {
                ShowDialog("Phạm vi ngày không hợp lệ", "Ngày bắt đầu phải trước hoặc bằng ngày kết thúc.");
            }
        }
    }

    private void ClearFilterButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.ClearFilters();
    }

    private async void ShowDialog(string title, string content)
    {
        var dialog = new ContentDialog
        {
            Title = title,
            Content = content,
            CloseButtonText = "OK",
            XamlRoot = this.XamlRoot
        };
        await dialog.ShowAsync();
    }

    private void SearchButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.SearchString = SearchBox.Text.Length > 0 ? SearchBox.Text : "";
        ViewModel.LoadData();
    }

    private async void OrderGridView_ItemClick(object sender, ItemClickEventArgs e)
    {
        if (e.ClickedItem is Order order)
        {
            SelectedOrder = order;
            ViewModel.SelectedOrder = order;
            OrderDetailsDialog.DataContext = SelectedOrder;
            ViewModel.UpdateExtraOrderList();
            await OrderDetailsDialog.ShowAsync();
        }
    }
}
