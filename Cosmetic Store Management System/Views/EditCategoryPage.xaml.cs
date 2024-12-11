using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Cosmetic_Store_Management_System.Core.Models;
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
using Windows.Storage;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace Cosmetic_Store_Management_System.Views;
/// <summary>
/// An empty page that can be used on its own or navigated to within a Frame.
/// </summary>
public sealed partial class EditCategoryPage : Page
{
    public EditCategoryViewModel ViewModel
    {
        get; 
    }
    public EditCategoryPage()
    {
        this.InitializeComponent();
        ViewModel = new EditCategoryViewModel();
    }

    protected override void OnNavigatedTo(NavigationEventArgs e)
    {
        base.OnNavigatedTo(e);
        if (e.Parameter is Category category)
        {
            ViewModel.Category = category;
        }
    }

    private async void saveButton_Click(object sender, RoutedEventArgs e)
    {
        ViewModel.dao.UpdateCategory(ViewModel.Category);

        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        var dialog = new ContentDialog();

        if (language.Equals("en-US"))
        {
            dialog.Title = "Success";
            dialog.Content = "The category has been updated successfully!";
            dialog.PrimaryButtonText = "OK";
        }
        else
        {
            dialog.Title = "Thành công";
            dialog.Content = "Danh mục đã được cập nhật thành công!";
            dialog.PrimaryButtonText = "OK";
        }

        dialog.XamlRoot = this.Content.XamlRoot;
        await dialog.ShowAsync();

        this.Frame.Navigate(typeof(CategoryPage));
    }

    private void cancelButton_Click(object sender, RoutedEventArgs e)
    {
        this.Frame.Navigate(typeof(CategoryPage));
    }
}
