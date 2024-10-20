using CommunityToolkit.WinUI.UI.Controls;

using Cosmetic_Store_Management_System.ViewModels;

using Microsoft.UI.Xaml.Controls;

namespace Cosmetic_Store_Management_System.Views;

public sealed partial class OverviewsPage : Page
{
    public ProductDataViewModel ViewModel
    {
        get;
    }

    public OverviewsPage()
    {
        ViewModel = App.GetService<ProductDataViewModel>();
        InitializeComponent();
    }

    private void MoreButton_Click(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
    {
        // Điều hướng đến trang ProductPage
        Frame.Navigate(typeof(ProductDataPage));
    }
}
