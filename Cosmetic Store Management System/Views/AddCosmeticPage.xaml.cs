using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.ViewModels;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Windows.Storage;
using Windows.Storage.Pickers;
using WinRT.Interop;
using System.Text.RegularExpressions;
using Microsoft.UI.Xaml.Input;
using Windows.System;

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
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        string errorMessage = "";

        int price;
        int quantity;

        // Name validation
        if (string.IsNullOrWhiteSpace(ViewModel.Cosmetic.Name))
        {
            errorMessage += language.Equals("en-US")
                         ? "Name cannot be empty!\n"
                         : "Tên không được để trống!\n";
        }
        // Category validation
        else if (categoryComboBox.SelectedItem == null)
        {
            errorMessage += language.Equals("en-US")
                         ? "Please select a category!\n"
                         : "Vui lòng chọn danh mục sản phẩm!\n";
        }
        // Manufacturer validation
        else if (manufacturerComboBox.SelectedItem == null)
        {
            errorMessage += language.Equals("en-US")
                         ? "Please select a manufacturer!\n"
                         : "Vui lòng chọn hãng sản xuất!\n";
        }
        else if (!int.TryParse(ViewModel.quantity, out int parsedQuantity) || parsedQuantity <= 0)
        {
            errorMessage += language.Equals("en-US") ? "Invalid quantity!\n" : "Số lượng không hợp lệ!\n";
        }

        else if (!int.TryParse(ViewModel.price, out int parsedPrice) || parsedPrice <= 0) 
        {
            errorMessage += language.Equals("en-US") ? "Invalid price!\n" : "Giá không hợp lệ!\n";
        }

        else if (ViewModel.Cosmetic.ImageData == null || ViewModel.Cosmetic.ImageData.Length == 0)
        {
            errorMessage += language.Equals("en-US")
                         ? "Please upload product image!\n"
                         : "Vui lòng tải ảnh sản phẩm!\n";
        }
        else
        {
            ViewModel.Cosmetic.Price = parsedPrice;
            ViewModel.Cosmetic.Quantity = parsedQuantity;
        }


        if (errorMessage != "")
        {
            DisplayValidationErrors(errorMessage);
            return false;
        }

        return true;
    }



    private async void DisplayValidationErrors(string errorMessage)
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];

        await new ContentDialog
        {
            XamlRoot = this.Content.XamlRoot,
            Title = language.Equals("en-US")
                  ? "Unable to add product"
                  : "Không thể thêm sản phẩm",
            Content = errorMessage,
            CloseButtonText = "OK"
        }.ShowAsync();
    }


    private async void saveButton_Click(object sender, RoutedEventArgs e)
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        if (!ValidateInput()) return;

        ViewModel.Manufacturer = manufacturerComboBox.SelectedItem as Manufacturer;
        ViewModel.Category = categoryComboBox.SelectedItem as Category;
        var (success, msg)  = ViewModel.AddCosmetic();

        
        if (success)
        {
            var dialog = new ContentDialog()
            {
                Title = language.Equals("en-US") ? "Success" : "Thành công",
                Content = msg,
                PrimaryButtonText = "OK",
                XamlRoot = this.Content.XamlRoot
            };
            await dialog.ShowAsync();
            this.Frame.Navigate(typeof(ProductDataPage));
        }
        else
        {
            var dialog = new ContentDialog()
            {
                Title = language.Equals("en-US") ? "Error" : "Lỗi",
                Content = msg,
                PrimaryButtonText = "OK",
                XamlRoot = this.Content.XamlRoot
            };
            await dialog.ShowAsync();
        }    
               
    }

    private void cancelButton_Click(object sender, RoutedEventArgs e)
    {
        this.Frame.Navigate(typeof(ProductDataPage));
    }

    private async void PickAPhotoButton_Click(object sender, RoutedEventArgs e)
    {
        // Clear previous returned file name, if it exists, between iterations of this scenario
        PickAPhotoOutputTextBlock.Text = "";

        FileOpenPicker fileOpenPicker = new()
        {
            ViewMode = PickerViewMode.Thumbnail,
            FileTypeFilter = { ".jpg", ".jpeg", ".png", ".gif" },
        };

        nint windowHandle = WindowNative.GetWindowHandle(App.MainWindow);
        InitializeWithWindow.Initialize(fileOpenPicker, windowHandle);

        StorageFile file = await fileOpenPicker.PickSingleFileAsync();
        if (file != null)
        {
            PickAPhotoOutputTextBlock.Text = file.Name;

            // Read file as binary
            using var stream = await file.OpenReadAsync();
            using var dataReader = new Windows.Storage.Streams.DataReader(stream);
            await dataReader.LoadAsync((uint)stream.Size);
            byte[] imageData = new byte[stream.Size];
            dataReader.ReadBytes(imageData);

            ViewModel.Cosmetic.ImageData = imageData;
        }
        else
        {
            PickAPhotoOutputTextBlock.Text = "Operation cancelled.";
        }

    }
}
