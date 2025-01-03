using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.ViewModels;
public class ManufacturerViewModel : ObservableRecipient
{
    public ObservableCollection<Manufacturer> Manufacturers
    {
        get; set;
    } = new ObservableCollection<Manufacturer>();

    public IManufacturerDAO ManufacturerDAO
    {
        get; 
    } = new SQLManufacturerDAO();

    public string Info
    {
        get
        {
            var localSettings = ApplicationData.Current.LocalSettings;

            if (localSettings.Values["appLanguage"].Equals("vi-VN"))
            {
                return $"Hiển thị {Manufacturers.Count}/{RowsPerPage} trên tổng số {TotalItems} thương hiệu";
            }

            return $"Displaying {Manufacturers.Count}/{RowsPerPage} of total {TotalItems} item(s)";
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

    public ManufacturerViewModel()
    {
        RowsPerPage = 12;
        CurrentPage = 1;
        
        LoadData();
    }
    public void LoadData()
    {
        IManufacturerDAO manufacturerDAO = new SQLManufacturerDAO();
        Manufacturers.Clear();
        //List<Manufacturer> manufacturers = ManufacturerDAO.GetManufacturers();
        var (items, count) = manufacturerDAO.GetManufacturers(
            CurrentPage, RowsPerPage
        );
        foreach (var item in items) // Add new items
        {
            Manufacturers.Add(item);
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
    }

    public Tuple<bool, string> AddManufacturer(string name, string origin)
    {
        var DAO = new SQLManufacturerDAO();
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        if (name.Length == 0)
        {
            return new Tuple<bool, string>(
                false,
                language.Equals("en-US")
                    ? "Please enter manufacturer name"
                    : "Vui lòng nhập tên nhà sản xuất!");
        }

        if (origin.Length == 0)
        {
            return new Tuple<bool, string>(
                false,
                language.Equals("en-US")
                    ? "Please enter manufacturer origin"
                    : "Vui lòng nhập nơi xuất xứ!"
            );
        }

        var founded = DAO.GetManufacturerByName(name);

        if (founded != null)
        {
            return new Tuple<bool, string>(
                 false,
                 language.Equals("en-US")
                     ? "Manufacturer already exists"
                     : "Nhà sản xuất đã tồn tại!"
                 );
        }

        DAO.AddManufacturer(new Manufacturer()
        {
            Name = name,
            Origin = origin
        });

        return new Tuple<bool, string>(
            true,
            language.Equals("en-US")
                ? "The manufacturer has been inserted successfully!"
                : "Nhà sản xuất đã được lưu thành công!"
        );
    }

    public Tuple<bool, string> DeleteManufacturer(int ID)
    {
        ICosmeticDAO cosmeticDAO = new SQLCosmeticDAO();
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        var count = cosmeticDAO.GetCosmeticCountByManufacturer(ID);

        if (count > 0)
        {
            return new Tuple<bool, string>(
                false,
                language.Equals("en-US")
                    ? "Cannot delete this manufacturer."
                    : "Không thể xóa nhà sản xuất này."
            );
        }

        IManufacturerDAO manufacturerDAO = new SQLManufacturerDAO();
        manufacturerDAO.DeleteManufacturer(ID);
        LoadData();

        return new Tuple<bool, string>(
            true,
            language.Equals("en-US")
                ? "The manufacturer has been deleted successfully!"
                : "Nhà sản xuất đã được xóa thành công!"
            );
    }
}
