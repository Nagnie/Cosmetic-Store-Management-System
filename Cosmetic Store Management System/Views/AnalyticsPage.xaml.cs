using Cosmetic_Store_Management_System.ViewModels;
using LiveChartsCore;
using LiveChartsCore.SkiaSharpView;
using LiveChartsCore.SkiaSharpView.Drawing.Geometries;
using Microsoft.UI.Xaml.Controls;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.Views;

public sealed partial class AnalyticsPage : Page
{
    public AnalyticsViewModel ViewModel
    {
        get;
    } = new AnalyticsViewModel();

    public AnalyticsPage()
    {
     
        this.InitializeComponent();
        DataContext = ViewModel;
    }

    private async void Button_Click(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        var dialog = new ContentDialog
        {
            XamlRoot = this.XamlRoot
        };

        DateTime startDate = StartDatePicker.Date.DateTime;
        DateTime endDate = EndDatePicker.Date.DateTime;

        // Kiểm tra nếu ngày bắt đầu sau ngày kết thúc
        if (startDate > endDate)
        {
            if (language.Equals("en-US"))
            {
                dialog.Title = "Invalid Dates";
                dialog.Content = "Start date must be before end date.";
                dialog.PrimaryButtonText = "OK";
            }
            else
            {
                dialog.Title = "Ngày không hợp lệ";
                dialog.Content = "Ngày bắt đầu phải trước ngày kết thúc.";
                dialog.PrimaryButtonText = "Đồng ý";
            }

            await dialog.ShowAsync();
            return;
        }

        // Tính doanh thu trung bình
        double averageRevenue = ViewModel.CalculateAverageRevenue(startDate, endDate);

        if (language.Equals("en-US"))
        {
            AverageRevenueResult.Text = $"{averageRevenue:N2} thousand VND";
        }
        else
        {
            AverageRevenueResult.Text = $"{averageRevenue:N2} nghìn VND";
        }
    }
}
