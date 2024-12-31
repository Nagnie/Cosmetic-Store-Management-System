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
using System.ComponentModel;

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
        LoadTopProducts();
        LoadTopCustomers();
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

        // Sắp xếp danh sách theo số lượng sản phẩm giảm dần
        var sortedCategories = categories.OrderByDescending(c => c.ProductCount).ToList();

        // Lấy top 5
        var top5Categories = sortedCategories.Take(5);

        // Tính tổng số lượng sản phẩm còn lại
        var othersCount = sortedCategories.Skip(5).Sum(c => c.ProductCount);

        // Tạo danh sách Series với "Khác" ở đầu
        var series = new List<PieSeries<int>>();
        var legends = new List<CategoryLegend>();

        // Thêm mục "Khác" trước
        if (othersCount > 0)
        {
            series.Add(new PieSeries<int>
            {
                Values = new[] { othersCount },
                Name = language.Equals("en-US") ? "Other" : "Khác",
                MaxRadialColumnWidth = 60
            });

            legends.Add(new CategoryLegend
            {
                Name = language.Equals("en-US") ? "Other" : "Khác",
                ProductCount = othersCount
            });
        }

        // Thêm top 5 vào sau
        series.AddRange(top5Categories.Select(category =>
            new PieSeries<int>
            {
                Values = new[] { category.ProductCount },
                Name = category.Name,
                MaxRadialColumnWidth = 60
            }));

        legends.AddRange(top5Categories.Select(category => new CategoryLegend
        {
            Name = category.Name,
            ProductCount = category.ProductCount
        }));

        // Gán dữ liệu cho biểu đồ
        Categories = series;

        // Gán dữ liệu cho chú thích
        CategoryLegends = legends;
    }

    // Danh sách chú thích
    public List<CategoryLegend> CategoryLegends
    {
        get; set;
    }

    public class CategoryLegend
    {
        public string Name
        {
            get; set;
        }
        public int ProductCount
        {
            get; set;
        }
    }

    public IEnumerable<ISeries> Manufacturers
    {
        get; set;
    }

    // Thuộc tính lưu danh sách chú thích
    public List<ManufacturerLegend> ManufacturerLegends
    {
        get; set;
    }

    public class ManufacturerLegend
    {
        public string Name
        {
            get; set;
        }
        public int ProductCount
        {
            get; set;
        }
    }

    private void CreateManufacturerChart()
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        IManufacturerDAO manufacturerDAO = new SQLManufacturerDAO();
        List<Manufacturer> manufacturers = manufacturerDAO.GetAllManufacturers();

        // Sắp xếp danh sách theo số lượng sản phẩm giảm dần
        var sortedManufacturers = manufacturers.OrderByDescending(m => m.ProductCount).ToList();

        // Lấy top 5
        var top5Manufacturers = sortedManufacturers.Take(5);

        // Tính tổng số lượng sản phẩm còn lại
        var othersCount = sortedManufacturers.Skip(5).Sum(m => m.ProductCount);

        // Tạo danh sách Series với "Khác" ở đầu
        var series = new List<PieSeries<int>>();
        var legends = new List<ManufacturerLegend>();

        // Thêm mục "Khác" trước
        if (othersCount > 0)
        {
            series.Add(new PieSeries<int>
            {
                Values = new[] { othersCount },
                Name = language.Equals("en-US") ? "Other" : "Khác",
                MaxRadialColumnWidth = 60
            });

            legends.Add(new ManufacturerLegend
            {
                Name = language.Equals("en-US") ? "Other" : "Khác",
                ProductCount = othersCount
            });
        }

        // Thêm top 5 vào sau
        series.AddRange(top5Manufacturers.Select(manufacturer =>
            new PieSeries<int>
            {
                Values = new[] { manufacturer.ProductCount },
                Name = manufacturer.Name,
                MaxRadialColumnWidth = 60
            }));

        legends.AddRange(top5Manufacturers.Select(manufacturer => new ManufacturerLegend
        {
            Name = manufacturer.Name,
            ProductCount = manufacturer.ProductCount
        }));

        // Gán dữ liệu cho biểu đồ
        Manufacturers = series;

        // Gán dữ liệu cho chú thích
        ManufacturerLegends = legends;
    }

    public class TopProductsLegend
    {
        public string Name
        {
            get; set;
        }
        public long Total
        {
            get; set;
        }
    }

    public List<TopProductsLegend> TopProducts
    {
        get; set;
    }

    private void LoadTopProducts()
    {
        IOrderDetailDAO dao = new SQLOrderDetailDAO();
        List<(string name, long total)> products = dao.GetTop5MostPurchasedProducts();
        TopProducts = products.Select(p => new TopProductsLegend
        {
            Name = p.name,
            Total = p.total
        }).ToList();

    }

    public class TopCustomersLegend
    {
        public string Name
        {
            get; set;
        }
        public long Total
        {
            get; set;
        }
    }

    public List<TopCustomersLegend> TopCustomers
    {
        get; set;
    }

    private void LoadTopCustomers()
    {
        IOrderDAO dao = new SQLOrderDAO();
        List<(string name, long total)> customers = dao.GetTop5MostRevenueCustomers();
        TopCustomers = customers.Select(p => new TopCustomersLegend
        {
            Name = p.name,
            Total = p.total
        }).ToList();

    }
}
