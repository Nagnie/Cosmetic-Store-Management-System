using Cosmetic_Store_Management_System.ViewModels;

using Microsoft.UI.Xaml.Controls;

namespace Cosmetic_Store_Management_System.Views;

public sealed partial class AnalyticsPage : Page
{
    public AnalyticsViewModel ViewModel
    {
        get;
    }

    public AnalyticsPage()
    {
        ViewModel = App.GetService<AnalyticsViewModel>();
        InitializeComponent();
    }
}
