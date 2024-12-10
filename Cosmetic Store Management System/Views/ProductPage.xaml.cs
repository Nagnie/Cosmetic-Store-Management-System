using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;

using System.Runtime.InteropServices.WindowsRuntime;
using CommunityToolkit.Mvvm;
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

namespace Cosmetic_Store_Management_System.Views;

public sealed partial class ProductPage : Page
{
    public ProductViewModel ViewModel
    {
        get;
    }

    public ProductPage()
    {
        ViewModel = new ProductViewModel();
        this.InitializeComponent();
        this.DataContext = ViewModel;
    }

    protected override void OnNavigatedTo(NavigationEventArgs e)
    {
        base.OnNavigatedTo(e);

        if (e.Parameter is Cosmetic product)
        {
            ViewModel.Cosmetic = product;
        }
    }

    private void editButton_Click(object sender, RoutedEventArgs e)
    {
        Debug.WriteLine(ViewModel.Cosmetic.Name);
        this.Frame.Navigate(typeof(UpdateCosmeticPage), ViewModel.Cosmetic);
    }

    private async void deleteButton_Click(object sender, RoutedEventArgs e)
    {
        ICosmeticDAO dao = new SQLCosmeticDAO();

        ContentDialog dialog = new ContentDialog();

        // XamlRoot must be set in the case of a ContentDialog running in a Desktop app
        dialog.XamlRoot = this.XamlRoot;
        dialog.Style = Application.Current.Resources["DefaultContentDialogStyle"] as Style;
        dialog.Title = "Delete this product?";
        dialog.Content = "Are you sure to delete this product?";
        dialog.PrimaryButtonText = "Delete";
        dialog.CloseButtonText = "Cancel";
        dialog.DefaultButton = ContentDialogButton.Primary;
        //dialog.Content = new ContentDialogContent();

        ContentDialogResult result = await dialog.ShowAsync();

        if (result == ContentDialogResult.Primary)
        {
            var button = sender as Button;
            var cosmetic = button?.DataContext as Cosmetic;
            bool success = dao.DeleteCosmetic(ViewModel.Cosmetic.ID);

            if (success)
            {
                await new ContentDialog
                {
                    XamlRoot = this.Content.XamlRoot,
                    Title = "Delete",
                    Content = "Delete successfully!",
                    CloseButtonText = "OK"
                }.ShowAsync();
            }
            else
            {
                await new ContentDialog
                {
                    XamlRoot = this.Content.XamlRoot,
                    Title = "Delete",
                    Content = "Delete failed",
                    CloseButtonText = "Cannot delete cosmetic!"
                }.ShowAsync();
            }

            Frame.Navigate(typeof(ProductDataPage), ViewModel.Cosmetic);
        }
    }

    private void backButton_Click(object sender, RoutedEventArgs e)
    {
        this.Frame.Navigate(typeof(ProductDataPage));
    }

    private async void previousProductButton_Click(object sender, RoutedEventArgs e)
    {
        await ViewModel.LoadPreviousProduct();
        this.Frame.Navigate(typeof(ProductPage), ViewModel.Cosmetic);
    }

    private async void nextProductButton_Click(object sender, RoutedEventArgs e)
    {
        await ViewModel.LoadNextProduct();
        this.Frame.Navigate(typeof(ProductPage), ViewModel.Cosmetic);
    }
}