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

namespace Cosmetic_Store_Management_System.ViewModels;

public partial class ProductDataViewModel : ObservableRecipient
{
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
        GetCosmetics();

        ICategoryDAO categoryDAO = new SQLCategoryDAO();
        Categories = new ObservableCollection<Category>(categoryDAO.GetCategories());

        IManufacturerDAO manufacturerDAO = new SQLManufacturerDAO();
        Manufacturers = new ObservableCollection<Manufacturer>(manufacturerDAO.GetManufacturers());

    }

    public void GetCosmetics()
    {
        ICosmeticDAO cosmeticDao = new SQLCosmeticDAO();
        Cosmetics.Clear();
        List<Cosmetic> cosmeticList = cosmeticDao.GetCosmetics(CategoryIDs, ManufacturerIDs, SearchString, SortString);

        foreach (Cosmetic cosmetic in cosmeticList)
        {
            Cosmetics.Add(cosmetic);
        }
    }

    public void SetSortString(string sortString)
    {
        SortString = sortString;
        GetCosmetics();
    }
}
