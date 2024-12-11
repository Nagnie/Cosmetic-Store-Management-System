using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.ViewModels;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Windows.Storage;
using Windows.Storage.Pickers;
using WinRT.Interop;

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

        // Name validation
        if (string.IsNullOrWhiteSpace(ViewModel.Cosmetic.Name))
        {
            errorMessage = language.Equals("en-US")
                         ? "Name cannot be empty!"
                         : "Tên không được để trống!";
        }
        // Category validation
        else if (categoryComboBox.SelectedItem == null)
        {
            errorMessage = language.Equals("en-US")
                         ? "Please select a category!"
                         : "Vui lòng chọn danh mục sản phẩm!";
        }
        // Manufacturer validation
        else if (manufacturerComboBox.SelectedItem == null)
        {
            errorMessage = language.Equals("en-US")
                         ? "Please select a manufacturer!"
                         : "Vui lòng chọn hãng sản xuất!";
        }
        // Quantity validation
        else if (ViewModel.Cosmetic.Quantity <= 0)
        {
            errorMessage = language.Equals("en-US")
                         ? "Quantity must be a positive number!"
                         : "Số lượng sản phẩm phải là số nguyên dương!";
        }
        // Price validation
        else if (ViewModel.Cosmetic.Price <= 0)
        {
            errorMessage = language.Equals("en-US")
                         ? "Price must be a positive number!"
                         : "Giá sản phẩm phải là số dương!";
        }
        else if (ViewModel.Cosmetic.ImageData == null || ViewModel.Cosmetic.ImageData.Length == 0)
        {
            errorMessage = language.Equals("en-US")
                         ? "Please upload product image!"
                         : "Vui lòng tải ảnh sản phẩm!";
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
        if (!ValidateInput()) return;

        ViewModel.Manufacturer = manufacturerComboBox.SelectedItem as Manufacturer;
        ViewModel.Category = categoryComboBox.SelectedItem as Category;
        bool success = ViewModel.AddCosmetic();

        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        if (success)
        {
            if (language.Equals("en-US"))
            {
                await new ContentDialog
                {
                    XamlRoot = this.Content.XamlRoot,
                    Title = "Success",
                    Content = "Product is inserted successfully!",
                    CloseButtonText = "OK"
                }.ShowAsync();
            }
            else
            {
                await new ContentDialog
                {
                    XamlRoot = this.Content.XamlRoot,
                    Title = "Thành công",
                    Content = "Sản phẩm đã được lưu thành công!",
                    CloseButtonText = "OK"
                }.ShowAsync();
            }
        }
        else
        {
            if (language.Equals("en-US"))
            {
                await new ContentDialog
                {
                    XamlRoot = this.Content.XamlRoot,
                    Title = "Error",
                    Content = "Enable to insert product!",
                    CloseButtonText = "OK"
                }.ShowAsync();
            }
            else
            {
                await new ContentDialog
                {
                    XamlRoot = this.Content.XamlRoot,
                    Title = "Lỗi",
                    Content = "Không thể thêm sản phẩm vào hệ thống!",
                    CloseButtonText = "OK"
                }.ShowAsync();
            }
        } 

        this.Frame.Navigate(typeof(ProductDataPage));
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
