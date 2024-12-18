using Cosmetic_Store_Management_System.ViewModels;
using LiveChartsCore;
using LiveChartsCore.SkiaSharpView;
using LiveChartsCore.SkiaSharpView.Drawing.Geometries;
using Microsoft.UI.Xaml.Controls;

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
    }
}
