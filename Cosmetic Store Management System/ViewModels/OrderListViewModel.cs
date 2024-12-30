using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Contracts.ViewModels;
using Cosmetic_Store_Management_System.Core.Contracts.Services;
using Cosmetic_Store_Management_System.Core.Models;
using Microsoft.UI.Xaml.Controls.Primitives;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using System.Diagnostics;
using Cosmetic_Store_Management_System.Helpers;
using Windows.Services.Maps;
using static Microsoft.Extensions.Logging.EventSource.LoggingEventSource;
using Windows.Storage;
using System.ComponentModel;
using Microsoft.UI.Xaml.Media.Imaging;
using System.Windows.Input;
using CommunityToolkit.Mvvm.Input;


namespace Cosmetic_Store_Management_System.ViewModels;

public partial class OrderListViewModel : ObservableRecipient
{
    //public ObservableCollection<Order> Orders { get; set; } = new ObservableCollection<Order>();
    public ObservableCollection<OrderDetail> OrderDetails { get; set; } = new ObservableCollection<OrderDetail>();
    public ObservableCollection<ExtraOrderListViewModel> ExtraOrderLists
    {
        get; set;
    } = new ObservableCollection<ExtraOrderListViewModel>();

    private ObservableCollection<Order> _orders = new ObservableCollection<Order>();
    public ObservableCollection<Order> Orders
    {
        get => _orders;
        set
        {
            _orders = value;
            OnPropertyChanged();
        }
    }

    private Order _selectedOrder;
    public Order SelectedOrder
    {
        get => _selectedOrder;
        set
        {
            if (_selectedOrder != value)
            {
                _selectedOrder = value;
                OnPropertyChanged(nameof(SelectedOrder));
                LoadOrderDetails();
                //UpdateExtraOrderList();
            }
        }
    }
            
    public void LoadOrderDetails()
    {
        OrderDetails.Clear();

        if (SelectedOrder != null)
        {
            IOrderDetailDAO orderDetailDao = new SQLOrderDetailDAO();
            var items = orderDetailDao.GetOrderDetails(SelectedOrder.ID);

            SelectedOrder.Details = items; // Optional, if the Order class tracks its details.
        }
    }

    public OrderListViewModel()
    {
        LoadData();
    }

    public void UpdateExtraOrderList()
    {
        ExtraOrderLists.Clear();
        foreach (var orderDetail in OrderDetails)
        {
            ExtraOrderLists.Add(new ExtraOrderListViewModel
            {
                OrderDetail = orderDetail,
                Cosmetic = orderDetail.Cosmetic ?? new Cosmetic { Name = "Unknown", ImageData = null  }
            });
        }
    }

    public ObservableCollection<PageInfo> PageInfos { get; set; } = new ObservableCollection<PageInfo>();

    public PageInfo CurrentPageInfo
    {
        get; set;
    } = new PageInfo();
    public bool EnablePrev => CurrentPageInfo != null && CurrentPage > 1;
    public bool EnableNext => CurrentPageInfo != null && CurrentPage < CurrentPageInfo.Total;
    public int CurrentPage  {   get; set;   } = 1;
    public int TotalPages   {   get; set;   } = 0;
    public int TotalItems { get; set; } = 0;

    public const int ItemsPerPage = 12;
    public void GoToPage(int page)
    {
        CurrentPage = page;
        LoadData();
    }
    public void GoToNextPage()
    {
        CurrentPageInfo = PageInfos.FirstOrDefault(p => p.Page == CurrentPage + 1);
    }
    public void GoToPrevPage()
    {
        CurrentPageInfo = PageInfos.FirstOrDefault(p => p.Page == CurrentPage - 1);
    }
    public string Info
    {
        get
        {
            var localSettings = ApplicationData.Current.LocalSettings;

            if (localSettings.Values["appLanguage"].Equals("vi-VN"))
            {
                return $"Hiển thị {Orders.Count}/{ItemsPerPage} trong tổng số {TotalItems} đơn hàng";
            }

            return $"Displaying {Orders.Count}/{ItemsPerPage} of total {TotalItems} order(s)";
        }
    }

    public DateTime? StartDateFilter
    {
        get; set;
    }
    public DateTime? EndDateFilter
    {
        get; set;
    }
    public void FilterOrdersByDate(DateTime startDate, DateTime endDate)
    {
        StartDateFilter = startDate;
        EndDateFilter = endDate;
        CurrentPage = 1;
        LoadData();
    }

    
    public void ClearFilters()
    {
        SearchString  = "";

        StartDateFilter = null;
        EndDateFilter = null;


        LoadData();
    }
    public void FilterOrdersByPhone(string phone)
    {
        
    }
    public string SearchString
    {
        get; set;
    } = "";

    public void LoadData()
    {
        IOrderDAO orderDao = new SQLOrderDAO();
        
        var (items, count) = orderDao.GetOrders(CurrentPage, ItemsPerPage, StartDateFilter, EndDateFilter, SearchString);

        Orders.Clear();

        foreach (var item in items)
        {
            Orders.Add(item);
        }

        TotalItems = count;

        var totalPage = (count % ItemsPerPage == 0)
            ? count / ItemsPerPage
            : count / ItemsPerPage + 1;

        if (TotalPages != totalPage)
        {
            TotalPages = totalPage;
            PageInfos.Clear();

            for (var i = 0; i < totalPage; i++)
            {
                PageInfos.Add(new PageInfo
                {
                    Page = i + 1,
                    Total = totalPage
                });
            }
        }

        CurrentPageInfo = PageInfos.FirstOrDefault(p => p.Page == CurrentPage);
        OnPropertyChanged(nameof(Info));
    }
}