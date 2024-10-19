using CommunityToolkit.WinUI.UI.Controls;

using Cosmetic_Store_Management_System.ViewModels;

using Microsoft.UI.Xaml.Controls;

namespace Cosmetic_Store_Management_System.Views;

public sealed partial class ProductPage : Page
{
    public ProductViewModel ViewModel
    {
        get;
    }

    public ProductPage()
    {
        ViewModel = App.GetService<ProductViewModel>();
        InitializeComponent();
    }

    private void OnViewStateChanged(object sender, ListDetailsViewState e)
    {
        if (e == ListDetailsViewState.Both)
        {
            ViewModel.EnsureItemSelected();
        }
    }
}
