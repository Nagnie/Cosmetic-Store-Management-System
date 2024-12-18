using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using LiveChartsCore;
using LiveChartsCore.SkiaSharpView;
using LiveChartsCore.SkiaSharpView.Drawing.Geometries;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.ViewModels;


public partial class AnalyticsViewModel : ObservableObject
{
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
}
