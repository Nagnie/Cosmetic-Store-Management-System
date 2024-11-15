using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.ViewModels;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace Cosmetic_Store_Management_System.Views;
/// <summary>
/// An empty page that can be used on its own or navigated to within a Frame.
/// </summary>
public sealed partial class AddCosmeticPage : Page
{
    public AddCosmeticViewModel ViewModel
    {
        get;
    } = new AddCosmeticViewModel();

    public AddCosmeticPage()
    {
        this.InitializeComponent();
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
        if (categoryComboBox.SelectedItem == null)
        {
            errorMessage += "Category must be selected.\n";
        }

        // Manufacturer validation
        if (manufacturerComboBox.SelectedItem == null)
        {
            errorMessage += "Manufacturer must be selected.\n";
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

        if (ViewModel.Cosmetic.ImageData == null || ViewModel.Cosmetic.ImageData.Length == 0)
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


    private async void saveButton_Click(object sender, RoutedEventArgs e)
    {
        if (!ValidateInput()) return;

        ViewModel.Manufacturer = manufacturerComboBox.SelectedItem as Manufacturer;
        ViewModel.Category = categoryComboBox.SelectedItem as Category;
        bool success = ViewModel.AddCosmetic();

        if (success)
        {
            await new ContentDialog
            {
                XamlRoot = this.Content.XamlRoot,
                Title = "Add",
                Content = "Add successfully!",
                CloseButtonText = "OK"
            }.ShowAsync();
        }
        else
        {
            await new ContentDialog
            {
                XamlRoot = this.Content.XamlRoot,
                Title = "Add",
                Content = "add failed",
                CloseButtonText = "Cannot add new cosmetic!"
            }.ShowAsync();
        }

        this.Frame.Navigate(typeof(ProductDataPage));
    }

    private void cancelButton_Click(object sender, RoutedEventArgs e)
    {
        this.Frame.Navigate(typeof(ProductDataPage));
    }
}
