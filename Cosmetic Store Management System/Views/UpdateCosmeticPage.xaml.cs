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

    private bool ValidateInput()
    {
        string errorMessage = "";

        // Name validation
        if (string.IsNullOrWhiteSpace(ViewModel.Cosmetic.Name))
        {
            errorMessage += "Name cannot be empty.\n";
        }

        // Category validation
        if (string.IsNullOrWhiteSpace(ViewModel.Cosmetic.Category.Name))
        {
            errorMessage += "Category cannot be empty.\n";
        }

        // Manufacturer validation
        if (string.IsNullOrWhiteSpace(ViewModel.Cosmetic.Manufacturer.Name))
        {
            errorMessage += "Manufacturer cannot be empty.\n";
        }

        // Quantity validation
        if (ViewModel.Cosmetic.Quantity <= 0)
        {
            errorMessage += "Quantity must be a positive number.\n";
        }

        // Price validation
        if (ViewModel.Cosmetic.Price <= 0)
        {
            errorMessage += "Price must be a positive number.\n";
        }

        if (string.IsNullOrWhiteSpace(ViewModel.Cosmetic.Image))
        {
            errorMessage += "Image input cannot be empty.\n";
        }

        // Image URL validation
        //if (!Uri.TryCreate(ViewModel.Cosmetic.Image, UriKind.Absolute, out Uri uriResult) ||
        //    !(uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps))
        //{
        //    errorMessage += "Image must be a valid URL.\n";
        //}

        if (errorMessage != "")
        {
            DisplayValidationErrors(errorMessage);
            return false;
        }

        return true;
    }

    // Method to display validation errors
    private async void DisplayValidationErrors(string errorMessage)
    {
        await new ContentDialog
        {
            XamlRoot = this.Content.XamlRoot,
            Title = "Validation Error",
            Content = errorMessage,
            CloseButtonText = "OK"
        }.ShowAsync();
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

    private async void updateButton_Click(object sender, RoutedEventArgs e)

    {
        if (!ValidateInput()) return;

        ICosmeticDAO dao = new SQLCosmeticDAO();
        bool success = dao.UpdateCosmetic(ViewModel.Cosmetic);

        if (success)
        {
            await new ContentDialog
            {
                XamlRoot = this.Content.XamlRoot,
                Title = "Update",
                Content = "Update successfully!",
                CloseButtonText = "OK"
            }.ShowAsync();
        }
        else
        {
            await new ContentDialog
            {
                XamlRoot = this.Content.XamlRoot,
                Title = "Update",
                Content = "Update failed",
                CloseButtonText = "Cannot update cosmetic!"
            }.ShowAsync();
        }

        Frame.Navigate(typeof(ProductPage), ViewModel.Cosmetic);
    }
}
