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

    //private void PopulateOrderDetails()
    //{
    //    OrderDetails.Clear();
    //    foreach (var order in Orders)
    //    {
    //        IOrderDetailDAO orderDetailDao = new SQLOrderDetailDAO();
    //        var details = orderDetailDao.GetOrderDetails(order.ID);
    //        foreach (var detail in details)
    //        {
    //            OrderDetails.Add(detail);
    //        }
    //    }
    //}

    
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
        RowsPerPage = 10;
        CurrentPage = 1;

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

    private PageInfo _selectedPageInfoItem;
    public PageInfo SelectedPageInfoItem
    {
        get => _selectedPageInfoItem;
        set
        {
            _selectedPageInfoItem = value;
            OnPropertyChanged(nameof(SelectedPageInfoItem));
        }
    }
    public int CurrentPage  {   get; set;   }
    public int TotalPages   {   get; set;   }
    public int TotalItems { get; set; } = 0;
    public int RowsPerPage  {   get; set;   }

    public void GoToNextPage()
    {
        if (CurrentPage < TotalPages)
        {
            CurrentPage++;
            LoadData();
        }
    }

    public void GoToPreviousPage()
    {
        if (CurrentPage > 1)
        {
            CurrentPage--;
            LoadData();
        }
    }

    public void GoToPage(int page)
    {
        CurrentPage = page;
        LoadData();
    }

    public string Info
    {
        get
        {
            var localSettings = ApplicationData.Current.LocalSettings;

            if (localSettings.Values["appLanguage"].Equals("vi-VN"))
            {
                return $"Hiển thị {Orders.Count}/{RowsPerPage} trong tổng số {TotalItems} đơn hàng";
            }

            return $"Displaying {Orders.Count}/{RowsPerPage} of total {TotalItems} order(s)";
        }
    }

    private bool _filterApplied = false;
    private DateTime _filterStartDate;
    private DateTime _filterEndDate;

    public void FilterOrdersByDate(DateTime startDate, DateTime endDate)
    {
        _filterApplied = true;
        _filterStartDate = startDate;
        _filterEndDate = endDate;
        LoadData();
    }

    public void ClearFilters()
    {
        _filterApplied = false;
        LoadData();
    }

    public void FilterOrdersByPhone(string phone)
    {
        
    }

    public void LoadData()
    {
        IOrderDAO orderDao = new SQLOrderDAO();
        Orders.Clear();

        var (items, count) = _filterApplied
            ? orderDao.GetOrdersByDate(_filterStartDate, _filterEndDate, CurrentPage, RowsPerPage)
            : orderDao.GetOrders(CurrentPage, RowsPerPage);

        foreach (var item in items)
        {
            Orders.Add(item);
        }

        if (!_filterApplied && count != TotalItems)
        {
            // Recreate pagination when not filtering
            TotalItems = count;
            TotalPages = (TotalItems / RowsPerPage) + ((TotalItems % RowsPerPage) == 0 ? 0 : 1);

            PageInfos.Clear();
            for (var i = 1; i <= TotalPages; i++)
            {
                PageInfos.Add(new PageInfo { Page = i, Total = TotalPages });
            }
        }

        SelectedPageInfoItem = PageInfos.FirstOrDefault(p => p.Page == CurrentPage);
        OnPropertyChanged(nameof(Info));
        OnPropertyChanged(nameof(TotalItems));
        OnPropertyChanged(nameof(TotalPages));
        OnPropertyChanged(nameof(CurrentPage));
    }


    //public void LoadData()
    //{
    //    IOrderDAO orderDao = new SQLOrderDAO();
    //    Orders.Clear();

    //    var (items, count) = orderDao.GetOrders(
    //        CurrentPage, RowsPerPage
    //    );
    //    foreach (var item in items) // Add new items
    //    {
    //        Orders.Add(item);
    //    }

    //    if (count != TotalItems)
    //    { // Recreate PageInfos list
    //        TotalItems = count;
    //        TotalPages = (TotalItems / RowsPerPage) +
    //            (((TotalItems % RowsPerPage) == 0) ? 0 : 1);

    //        PageInfos.Clear();
    //        for (var i = 1; i <= TotalPages; i++)
    //        {
    //            PageInfos.Add(new PageInfo
    //            {
    //                Page = i,
    //                Total = TotalPages
    //            });
    //        }
    //    }

    //    SelectedPageInfoItem = PageInfos.FirstOrDefault(p => p.Page == CurrentPage);
    //    OnPropertyChanged(nameof(Info));
    //    OnPropertyChanged(nameof(TotalItems));
    //    OnPropertyChanged(nameof(TotalPages));
    //    OnPropertyChanged(nameof(CurrentPage));

    //    //// Populate OrderDetails (if applicable)
    //    //PopulateOrderDetails();

    //    //// Update ExtraOrderLists
    //    //UpdateExtraOrderList();
    //}
}