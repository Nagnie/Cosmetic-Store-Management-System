using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using Cosmetic_Store_Management_System.ViewModels;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Controls.Primitives;
using Microsoft.UI.Xaml.Data;
using Microsoft.UI.Xaml.Input;
using Microsoft.UI.Xaml.Media;
using Microsoft.UI.Xaml.Navigation;
using Windows.Foundation;
using Windows.Foundation.Collections;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace Cosmetic_Store_Management_System.Views;
/// <summary>
/// An empty page that can be used on its own or navigated to within a Frame.
/// </summary>
public sealed partial class UpdateCosmeticPage : Page
{
    public UpdateCosmeticViewModel ViewModel { get; set; }

    private Cosmetic originalCosmetic;

    public UpdateCosmeticPage()
    {
        this.InitializeComponent();
        ViewModel = new UpdateCosmeticViewModel();
    }

    protected override void OnNavigatedTo(NavigationEventArgs e)
    {
        base.OnNavigatedTo(e);
        if (e.Parameter is Cosmetic cosmetic)
        {
            ViewModel.Cosmetic = cosmetic;

            // Create a backup of the original data
            originalCosmetic = new Cosmetic
            {
                ID = cosmetic.ID,
                Name = cosmetic.Name,
                Category = cosmetic.Category,
                Manufacturer = cosmetic.Manufacturer,
                Quantity = cosmetic.Quantity,
                Price = cosmetic.Price,
                Image = cosmetic.Image,
                Description = cosmetic.Description
            };
        }
    }

    private void cancelButton_Click(object sender, RoutedEventArgs e)
    {
        // Revert the ViewModel.Cosmetic to the original data
        ViewModel.Cosmetic.ID = originalCosmetic.ID;
        ViewModel.Cosmetic.Name = originalCosmetic.Name;
        ViewModel.Cosmetic.Category = originalCosmetic.Category;
        ViewModel.Cosmetic.Manufacturer = originalCosmetic.Manufacturer;
        ViewModel.Cosmetic.Quantity = originalCosmetic.Quantity;
        ViewModel.Cosmetic.Price = originalCosmetic.Price;
        ViewModel.Cosmetic.Image = originalCosmetic.Image;
        ViewModel.Cosmetic.Description = originalCosmetic.Description;

        // Navigate back to the ProductPage without saving changes
        Frame.Navigate(typeof(ProductPage), ViewModel.Cosmetic);
    }

    private void updateButton_Click(object sender, RoutedEventArgs e)
    {
        ICosmeticDAO dao = new SQLCosmeticDAO();
        dao.UpdateCosmetic(ViewModel.Cosmetic);
        Frame.Navigate(typeof(ProductPage), ViewModel.Cosmetic);
    }
}
