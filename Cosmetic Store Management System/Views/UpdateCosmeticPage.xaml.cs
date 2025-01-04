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
using Windows.Storage.Pickers;
using Windows.Storage;
using WinRT.Interop;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace Cosmetic_Store_Management_System.Views;
/// <summary>
/// An empty page that can be used on its own or navigated to within a Frame.
/// </summary>
public sealed partial class UpdateCosmeticPage : Page
{
    public UpdateCosmeticViewModel ViewModel { get; set; }
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
        }
    }

    private bool ValidateInput()
    {
        var errorMessage = "";
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];

        // Name validation
        if (string.IsNullOrWhiteSpace(ViewModel.Cosmetic.Name))
        {
            errorMessage = language.Equals("en-US") 
                ? "Please enter product name"
                : "Vui lòng nhập tên sản phẩm";
        }

        // Quantity validation
        else if (ViewModel.Cosmetic.Quantity <= 0)
        {
            errorMessage = language.Equals("en-US") 
                ? "Please enter a valid quantity"
                : "Vui lòng nhập số lượng hợp lệ";
        }

        // Price validation
        else if (ViewModel.Cosmetic.Price <= 0)
        {
            errorMessage = language.Equals("en-US") 
                ? "Please enter a valid price"
                : "Vui lòng nhập giá hợp lệ";
        }

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
            Content = errorMessage,
            CloseButtonText = "OK"
        }.ShowAsync();
    }

    private void cancelButton_Click(object sender, RoutedEventArgs e)
    {
        Frame.Navigate(typeof(ProductPage), ViewModel.Cosmetic);
    }
    private async void updateButton_Click(object sender, RoutedEventArgs e)
    {
        if (!ValidateInput()) return;

        ICosmeticDAO dao = new SQLCosmeticDAO();
        var success = dao.UpdateCosmetic(ViewModel.Cosmetic);
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];

        if (success)
        {
            if (language.Equals("en-US"))
            {
                await new ContentDialog
                {
                    XamlRoot = this.Content.XamlRoot,
                    Title = "Success",
                    Content = "Product is updated successfully!",
                    CloseButtonText = "OK"
                }.ShowAsync();
            }
            else
            {
                await new ContentDialog
                {
                    XamlRoot = this.Content.XamlRoot,
                    Title = "Thành công",
                    Content = "Sản phẩm đã được cập nhật thành công!",
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
                    Title = "Failed",
                    Content = "Update failed",
                    CloseButtonText = "Cancel"
                }.ShowAsync();
            }
            else
            {
                await new ContentDialog
                {
                    XamlRoot = this.Content.XamlRoot,
                    Title = "Lỗi",
                    Content = "Không thể cập nhật sản phẩm!",
                    CloseButtonText = "Hủy"
                }.ShowAsync();
            }
        }

        Frame.Navigate(typeof(ProductPage), ViewModel.Cosmetic);
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
            var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
            if (language.Equals("en-Us"))
            {
                PickAPhotoOutputTextBlock.Text = "Operation cancelled.";
            }
            else
            {
                PickAPhotoOutputTextBlock.Text = "Hủy chọn ảnh.";
            }
            
        }

    }
}
