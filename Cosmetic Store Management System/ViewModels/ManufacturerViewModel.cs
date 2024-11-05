using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;

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

    public string Info => $"Displaying {Manufacturers.Count}/{RowsPerPage} of total {TotalItems} item(s)";

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
        RowsPerPage = 10;
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
}
