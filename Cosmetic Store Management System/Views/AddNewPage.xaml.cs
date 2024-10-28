using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
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
using Microsoft.UI.Xaml.Media.Imaging;
using Cosmetic_Store_Management_System.ViewModels;
using Cosmetic_Store_Management_System.Core.Models;
using Windows.UI.Popups;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace Cosmetic_Store_Management_System.Views;
/// <summary>
/// An empty page that can be used on its own or navigated to within a Frame.
/// </summary>
public sealed partial class AddNewPage : Page
{
    public AddNewPage()
    {
        this.InitializeComponent();

        // Đảm bảo DispatcherQueue được khởi tạo
        //var helper = new Helpers.WinSystemDispatcherQueueHelper();
        //helper.EnsureWindowsSystemDispatcherQueueController();
    }

    private void CancelButton_Click(object sender, RoutedEventArgs e)
    {
        Frame.Navigate(typeof(ProductDataPage));
    }

    private async void OKButton_Click(object sender, RoutedEventArgs e)
    {
        //try 
        //{
        //    var product = new SampleProduct
        //{
        //    ProductName = ProductNameInput.Text,
        //    ProductID = ProductIDInput.Text,
        //    //Category = CategoryInput.Text,
        //    //BrandName = BrandNameInput.Text,
        //    //Quantity = int.TryParse(QuantityInput.Text, out int quantity) ? quantity : 0,
        //    Price = (int)(decimal.TryParse(PriceInput.Text, out decimal price) ? price : 0),
        //    //ImageLink = ImageLinkInput.Text,
        //    //Description = DescriptionInput.Text
        //};

        //// Access the shared ProductDataViewModel instance
        //var viewModel = (ProductDataViewModel)this.DataContext;
        //viewModel.SampleItems.Add(product);

        //    // Navigate back to ProductDataPage
           
        //}
        //catch (Exception ex)
        //{
        //    // Hiển thị thông báo lỗi
        //    var dialog = new MessageDialog(ex.Message, "Error");
        //    await dialog.ShowAsync();
        //}
        Frame.Navigate(typeof(ProductDataPage));
    }

    //private async void ChooseImageButton_Click(object sender, RoutedEventArgs e)
    //{
    //    var picker = new FileOpenPicker();
    //    picker.SuggestedStartLocation = PickerLocationId.PicturesLibrary;
    //    picker.FileTypeFilter.Add(".jpg");
    //    picker.FileTypeFilter.Add(".jpeg");
    //    picker.FileTypeFilter.Add(".png");

    //    // Liên kết picker với cửa sổ hiện tại
    //    var hwnd = WinRT.Interop.WindowNative.GetWindowHandle(this);
    //    WinRT.Interop.InitializeWithWindow.Initialize(picker, hwnd);

    //    StorageFile file = await picker.PickSingleFileAsync();
    //    if (file != null)
    //    {
    //        ImagePathTextBlock.Text = file.Path;
    //    }
    //    else
    //    {
    //        ImagePathTextBlock.Text = "No file selected";
    //    }
    //}

    private void ImageLinkInput_TextChanged(object sender, TextChangedEventArgs e)
    {
        try
        {
            var uri = new Uri(ImageLinkInput.Text, UriKind.Absolute);
            ImagePreview.Source = new BitmapImage(uri);
        }
        catch
        {
            // Handle exceptions for invalid URLs
            ImagePreview.Source = null;
        }
    }
}
