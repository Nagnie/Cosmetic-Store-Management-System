using Cosmetic_Store_Management_System.ViewModels;

using Microsoft.UI.Xaml.Controls;

namespace Cosmetic_Store_Management_System.Views;

public sealed partial class OverviewsPage : Page
{
    public OverviewsViewModel ViewModel
    {
        get;
    }

    public OverviewsPage()
    {
        ViewModel = App.GetService<OverviewsViewModel>();
        InitializeComponent();
    }
}
