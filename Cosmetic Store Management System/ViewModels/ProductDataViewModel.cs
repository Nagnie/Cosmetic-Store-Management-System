using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;

using CommunityToolkit.Mvvm.ComponentModel;

using Cosmetic_Store_Management_System.Contracts.ViewModels;
using Cosmetic_Store_Management_System.Core.Contracts.Services;
using Cosmetic_Store_Management_System.Core.Models;
using Microsoft.UI.Xaml.Controls.Primitives;

namespace Cosmetic_Store_Management_System.ViewModels;
public partial class ProductDataViewModel : ObservableRecipient, INavigationAware
{
    private readonly ISampleProductDataService _sampleDataService;

    [ObservableProperty]
    private SampleProduct? selected;

    public ObservableCollection<SampleProduct> SampleItems
    {
        get; private set;
    } = new ObservableCollection<SampleProduct>();

    public ObservableCollection<SampleProduct> LimitedSampleItems
    {
        get
        {
            return new ObservableCollection<SampleProduct>(SampleItems.Take(7));
        }
    }

    public ProductDataViewModel(ISampleProductDataService sampleDataService)
    {
        _sampleDataService = sampleDataService;
    }

    public async void OnNavigatedTo(object parameter)
    {
        SampleItems.Clear();

        var data = await _sampleDataService.GetListDetailsDataAsync();

        foreach (var item in data)
        {
            if (item is SampleProduct product)
            {
                SampleItems.Add(product);
            }
        }
    }

    public void OnNavigatedFrom()
    {
    }

    public void EnsureItemSelected()
    {
        Selected ??= SampleItems.First();
    }
}
