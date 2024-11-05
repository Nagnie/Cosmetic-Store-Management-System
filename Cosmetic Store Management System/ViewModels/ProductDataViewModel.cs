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

namespace Cosmetic_Store_Management_System.ViewModels;

public partial class ProductDataViewModel : ObservableRecipient
{
    public ICosmeticDAO dao = new SQLCosmeticDAO();
    public ObservableCollection<Cosmetic> Cosmetics
    {
        get; set;
    } = new ObservableCollection<Cosmetic>();

    public ObservableCollection<Category> Categories
    {
        get; set;
    } = new ObservableCollection<Category>();

    public ObservableCollection<Manufacturer> Manufacturers
    {
        get; set;
    } = new ObservableCollection<Manufacturer>();

    public string Info => $"Displaying {Cosmetics.Count}/{RowsPerPage} of total {TotalItems} item(s)";

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


    //public PageInfo SelectedPageInfoItem
    //{
    //    get; set;
    //}
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

    public void LoadData()
    {
        ICosmeticDAO cosmeticDao = new SQLCosmeticDAO();
        Cosmetics.Clear();
        var (items, count) = cosmeticDao.GetCosmetics(
            CategoryIDs, ManufacturerIDs,
            SearchString, SortString,
            CurrentPage, RowsPerPage
        );
        foreach (var item in items) // Add new items
        {
            Cosmetics.Add(item);
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

    public List<int> CategoryIDs
    {
        get; set;
    } = new List<int>();

    public List<int> ManufacturerIDs
    {
        get; set;
    } = new List<int>();

    public string SearchString
    {
        get; set;
    } = "";

    public string SortString
    {
        get; set;
    } = "cosmetic_id ASC";

    public ProductDataViewModel()
    {
        RowsPerPage = 10;
        CurrentPage = 1;
        //GetCosmetics();

        ICategoryDAO categoryDAO = new SQLCategoryDAO();
        Categories = new ObservableCollection<Category>(categoryDAO.GetAllCategories());

        IManufacturerDAO manufacturerDAO = new SQLManufacturerDAO();
        Manufacturers = new ObservableCollection<Manufacturer>(manufacturerDAO.GetAllManufacturers());

        LoadData();
    }

    //public void GetCosmetics()
    //{
    //    ICosmeticDAO cosmeticDao = new SQLCosmeticDAO();
    //    Cosmetics.Clear();
    //    List<Cosmetic> cosmeticList = cosmeticDao.GetCosmetics(CategoryIDs, ManufacturerIDs, SearchString, SortString);

    //    foreach (Cosmetic cosmetic in cosmeticList)
    //    {
    //        Cosmetics.Add(cosmetic);
    //    }
    //}

    public void SetSortString(string sortString)
    {
        SortString = sortString;
        LoadData();
    }


}
