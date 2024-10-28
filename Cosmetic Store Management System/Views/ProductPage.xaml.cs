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

namespace Cosmetic_Store_Management_System.Views;

public sealed partial class ProductPage : Page
{
    public SampleProduct SelectedProduct
    {
        get; set;
    }

    public ProductViewModel ViewModel
    {
        get;
    }

    public ProductPage()
    {
        ViewModel = App.GetService<ProductViewModel>();
        this.InitializeComponent();
        this.DataContext = ViewModel;
    }

    protected override void OnNavigatedTo(NavigationEventArgs e)
    {
        base.OnNavigatedTo(e);

        if (e.Parameter is SampleProduct product)
        {
            SelectedProduct = product;
            DataContext = SelectedProduct; // Set DataContext for data binding
        }
    }
}
