using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using LiveChartsCore;
using LiveChartsCore.SkiaSharpView;
using LiveChartsCore.SkiaSharpView.Drawing.Geometries;
using Windows.Storage;
using System.Collections.Generic;
using LiveChartsCore.SkiaSharpView.Extensions;
using System.Collections.ObjectModel;

namespace Cosmetic_Store_Management_System.ViewModels;


public partial class AnalyticsViewModel : ObservableObject
{
    public ObservableCollection<Cosmetic> Cosmetics
    {
        get; set;
    } = new ObservableCollection<Cosmetic>();

    public string SortString
    {
        get;
        set;
    } = "cosmetic_id ASC";

    public int OutOfStockCount
    {
        get; set;
    }

    public int InStockCount
    {
        get; set;
    }

    public int TodayOrderCount
    {
        get; set;
    }

    public int LastWeekOrderCount
    {
        get; set;
    }


    public void LoadData()
    {
        // Get the cosmetics from the database
        ICosmeticDAO dao = new SQLCosmeticDAO();
        var (items, count) = dao.GetCosmetics(
            null, null,
            "", SortString,
            1, 7
        );
        Cosmetics = new ObservableCollection<Cosmetic>(
            items
        );

        // Update low-stock count and products
        UpdateLowStock();

        // Get the out of stock count
        OutOfStockCount = dao.GetOutOfStockCount();

        // Get the in stock count
        InStockCount = dao.GetInStockCount();

        // Get the today order count
        IOrderDAO orderDAO = new SQLOrderDAO();
        TodayOrderCount = orderDAO.GetTodayOrderCount();

        // Get the last week order count
        LastWeekOrderCount = orderDAO.GetLastWeekOrderCount();
    }

    private ObservableCollection<Cosmetic> lowStockProducts;
    public ObservableCollection<Cosmetic> LowStockProducts
    {
        get => lowStockProducts;
        set => SetProperty(ref lowStockProducts, value); // Notify UI of changes
    }

    private int lowStockCount;
    public int LowStockCount
    {
        get => lowStockCount;
        set => SetProperty(ref lowStockCount, value); // Notify UI of changes
    }

    public void UpdateLowStock()
    {
        ICosmeticDAO dao = new SQLCosmeticDAO();
        var (items, count) = dao.GetCosmetics(
            null, null,
            "", SortString,
            1, 0
        );

        LowStockProducts = new ObservableCollection<Cosmetic>(
            items.Where(c => c.Quantity <= 10)
        );

        LowStockCount = LowStockProducts.Count;
    }

    // Revenue Chart
    public ISeries[] RevenueSeries
    {
        get; set;
    } = [];

    public Axis[] RevenueXAxis
    {
        get; set;
    } = [];

    public Axis[] RevenueYAxis
    {
        get; set;
    } = [];

    public AnalyticsViewModel()
    {
        CreateRevenueChart();
        LoadData();
        CreateCategoryChart();
        CreateManufacturerChart();
    }

    private void CreateRevenueChart()
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        IOrderDAO orderDAO = new SQLOrderDAO();
        List<Revenue> revenues = orderDAO.GetRevenues();

        RevenueSeries = [
            new ColumnSeries<double>
            {
                Values = revenues.Select(r => r.TotalRevenue),
                Name = language.Equals("en-US") ? "Revenue" : "Doanh thu"
            }
        ];

        RevenueXAxis = [
            new Axis
            {
                Labels = revenues.Select(r => $"{r.Month}/{r.Year}").ToArray(),
                Name = language.Equals("en-US") ? "Month" : "Tháng",
                TextSize = 12,
                NameTextSize = 12
            }
        ];

        RevenueYAxis = [
            new Axis
            {
                Name = language.Equals("en-US") 
                     ? "Sales Revenue (thousand VND)"
                     : "Doanh thu (nghìn VND)",
                TextSize = 12,
                NameTextSize = 12
            }
        ];
    }
    public IEnumerable<ISeries> Categories
    {
        get; set;
    }

    private void CreateCategoryChart()
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        ICategoryDAO categoryDAO = new SQLCategoryDAO();
        List<Category> categories = categoryDAO.GetAllCategories();

        Categories = categories.Select(category =>
                new PieSeries<int>
                {
                    Values = new[] { category.ProductCount },
                    Name = category.Name,
                    MaxRadialColumnWidth = 60
                }).ToArray();
    }

    public IEnumerable<ISeries> Manufacturers
    {
        get; set;
    }

    private void CreateManufacturerChart()
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        IManufacturerDAO manufacturerDAO = new SQLManufacturerDAO();
        List<Manufacturer> manufacturers = manufacturerDAO.GetAllManufacturers();

        Manufacturers = manufacturers.Select(manufacturer =>
                new PieSeries<int>
                {
                    Values = new[] { manufacturer.ProductCount },
                    Name = manufacturer.Name,
                    MaxRadialColumnWidth = 60
                }).ToArray();
    }
}
