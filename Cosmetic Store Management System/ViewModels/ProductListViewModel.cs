using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.UI.Xaml.Media.Imaging;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;

namespace Cosmetic_Store_Management_System.ViewModels;
public class ProductListViewModel : ObservableRecipient
{
    public ObservableCollection<ExtraProductListViewModel> ExtraCosmetics 
    { 
        get; set; 
    } = new ObservableCollection<ExtraProductListViewModel>();

    public ObservableCollection<Cosmetic> Cosmetics { get; set; } = new ObservableCollection<Cosmetic>();


    private void UpdateExtraCosmetics()
    {
        ExtraCosmetics.Clear();
        foreach (var cosmetic in Cosmetics)
        {
            ExtraCosmetics.Add(new ExtraProductListViewModel { Cosmetic = cosmetic });
        }
    }
    //public FullObservableCollection<Cosmetic> Cosmetics
    //{
    //    get; set;
    //} = new FullObservableCollection<Cosmetic>();

    public FullObservableCollection<Category> Categories
    {
        get; set;
    }

    public FullObservableCollection<Manufacturer> Manufacturers
    {
        get; set;
    }

    public ExtraProductListViewModel ExtraProductListViewModel
    {
        get; set;
    } = new ExtraProductListViewModel();



    public List<int> CategoryID
    {
        get; set;
    } = new List<int>();

    public List<int> ManufacturerID
    {
        get; set;
    } = new List<int>();

    public string SearchString
    {
        get; set;
    } = "";

    public int CurrentPage
    {
        get; set;
    } = 1;

    public int TotalPage
    {
        get; set;
    } = 0;

    public const int ItemsPerPage = 20;

    public ObservableCollection<PageInfo> PageInfos
    {
        get; set;
    } = new ObservableCollection<PageInfo>();

    public PageInfo CurrentPageInfo
    {
        get; set;
    } = new PageInfo();

    public bool EnablePrev => CurrentPage > 1;

    public bool EnableNext => CurrentPage != CurrentPageInfo.Total;

    public const string SortString = " cosmetic_id ASC ";

    public string CurrencyUnit
    {
        get; set;
    } = "USD";

    public ProductListViewModel()
    {
        ICategoryDAO categoryDAO = new SQLCategoryDAO();
        Categories = new FullObservableCollection<Category>(categoryDAO.GetAllCategories());

        IManufacturerDAO manufacturerDAO = new SQLManufacturerDAO();
        Manufacturers = new FullObservableCollection<Manufacturer>(manufacturerDAO.GetAllManufacturers());

        LoadData();
    }

    public void LoadData()
    {
        ICosmeticDAO cosmeticDAO = new SQLCosmeticDAO();
        (List<Cosmetic> cosmetics, var totalItem) = cosmeticDAO.GetCosmetics(
            CategoryID, 
            ManufacturerID, 
            SearchString, 
            " cosmetic_id ASC",
            CurrentPage, 
            ItemsPerPage
        );

        var totalPage = (totalItem % ItemsPerPage == 0)
            ? totalItem / ItemsPerPage
            : totalItem / ItemsPerPage + 1;

        if (TotalPage != totalPage)
        {
            TotalPage = totalPage;
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
        Cosmetics.Clear();

        foreach (var cosmetic in cosmetics)
        {
            Cosmetics.Add(cosmetic);
        }

        if (ExtraCosmetics == null)
        {
            ExtraCosmetics = new ObservableCollection<ExtraProductListViewModel>();
        }
        ExtraCosmetics.Clear();

        foreach (var cosmetic in cosmetics)
        {
            ExtraCosmetics.Add(new ExtraProductListViewModel
            {
                Cosmetic = cosmetic
            });
        }
    }

    public void AddCategoryID(int id)
    {
        CategoryID.Add(id);
    }

    public void RemoveCategoryID(int id)
    {
        CategoryID.Remove(id);
    }

    public void AddManufacturerID(int id)
    {
        ManufacturerID.Add(id);
    }

    public void RemoveManufacturerID(int id)
    {
        ManufacturerID.Remove(id);
    }

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
}
