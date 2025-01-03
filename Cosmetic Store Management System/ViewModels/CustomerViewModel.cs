using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.ViewModels;
public partial class CustomerViewModel : ObservableRecipient
{
    public ObservableCollection<Customer> Customers
    {
        get; set;
    } = new ObservableCollection<Customer>();

    public ICustomerDAO dao
    {
        get;
    } = new SQLCustomerDAO();

    public string Info
    {
        get
        {
            var localSettings = ApplicationData.Current.LocalSettings;

            if (localSettings.Values["appLanguage"].Equals("vi-VN"))
            {
                return $"Hiển thị {Customers.Count}/{RowsPerPage} trong tổng số {TotalItems} khách hàng";
            }

            return $"Displaying {Customers.Count}/{RowsPerPage} of total {TotalItems} customer(s)";
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
    public int CurrentPage
    {
        get; set;
    }
    public int TotalPages
    {
        get; set;
    }
    public int TotalItems { get; set; } = 0;
    public int RowsPerPage
    {
        get; set;
    }

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

    public CustomerViewModel()
    {
        RowsPerPage = 12;
        CurrentPage = 1;

        LoadData();
    }

    public void LoadData()
    {
        ICustomerDAO customerDAO = new SQLCustomerDAO();
        Customers.Clear();

        // Retrieve customer data from the DAO
        var (items, count) = customerDAO.GetCustomers(
            CurrentPage, RowsPerPage
        );

        // Add the retrieved customers to the collection
        foreach (var item in items)
        {
            Customers.Add(item);
        }

        if (count != TotalItems)
        { // Recreate PageInfos list
            TotalItems = count;
            TotalPages = (TotalItems / RowsPerPage) +
                (((TotalItems % RowsPerPage) == 0) ? 0 : 1);

            PageInfos.Clear();
            for (var i = 1; i <= TotalPages; i++)
            {
                PageInfos.Add(new PageInfo
                {
                    Page = i,
                    Total = TotalPages
                });
            }
        }

        SelectedPageInfoItem = PageInfos.FirstOrDefault(p => p.Page == CurrentPage);

        OnPropertyChanged(nameof(Info));
        OnPropertyChanged(nameof(TotalItems));
    
    }

    private bool IsValidPhone(string phone)
    {
        // Example validation: Check if the phone contains only digits and has 10 characters
        return phone.Length == 10 && phone.All(char.IsDigit);
    }

    public Tuple<bool, string> AddCustomer(string name, string phone)
    {
        var DAO = new SQLCustomerDAO();
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        if (name.Length == 0)
        {
            return new Tuple<bool, string>(
                false,
                language.Equals("en-US")
                    ? "Please enter Customer's name"
                    : "Vui lòng nhập tên khách hàng!");
        }

        if (string.IsNullOrWhiteSpace(phone) || !IsValidPhone(phone))
        {
            return new Tuple<bool, string>(
                false,
                language.Equals("en-US")
                    ? "Please enter a valid Customer's phone number!"
                    : "Vui lòng nhập số điện thoại khách hàng hợp lệ!"
            );
        }

        var founded = DAO.GetCustomer(phone);

        if (founded != null)
        {
            return new Tuple<bool, string>(
                 false,
                 language.Equals("en-US")
                     ? "Customer already exists"
                     : "Khách hàng đã tồn tại!"
                 );
        }

        DAO.AddCustomer(new Customer()
        {
            Name = name,
            Phone = phone
        });

        return new Tuple<bool, string>(
            true,
            language.Equals("en-US")
                ? "The customer has been inserted successfully!"
                : "Khách hàng đã được thêm thành công!"
        );
    }
}
