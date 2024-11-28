using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;
using System.IO;
using Microsoft.UI.Xaml.Media.Imaging;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Contracts.ViewModels;
using Cosmetic_Store_Management_System.Core.Contracts.Services;
using Cosmetic_Store_Management_System.Core.Models;
using Microsoft.UI.Xaml.Controls.Primitives;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using System.ComponentModel;

namespace Cosmetic_Store_Management_System.ViewModels;

public partial class ProductViewModel : ObservableRecipient
{
    public ICosmeticDAO CosmeticDao { get; set; } = new SQLCosmeticDAO();

    private Cosmetic _cosmetic;
    public Cosmetic Cosmetic
    {
        get => _cosmetic;
        set
        {
            _cosmetic = value;
            OnPropertyChanged(nameof(Cosmetic));
            LoadImage();  // Load the image when Cosmetic is set
        }
    }

    private BitmapImage _image;
    public BitmapImage Image
    {
        get => _image;
        private set
        {
            _image = value;
            OnPropertyChanged(nameof(Image));
        }
    }

    public event PropertyChangedEventHandler PropertyChanged;
    protected void OnPropertyChanged(string propertyName) =>
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));

    private void LoadImage()
    {
        if (Cosmetic?.ImageData != null)
        {
            var bitmapImage = new BitmapImage();
            using (var stream = new MemoryStream(Cosmetic.ImageData))
            {
                stream.Seek(0, SeekOrigin.Begin);
                bitmapImage.SetSourceAsync(stream.AsRandomAccessStream());
            }
            Image = bitmapImage;
        }
    }

    public async Task LoadProductById(int productId)
    {
        //var product = await Task.Run(() => CosmeticDao.GetCosmeticById(productId));
        //if (product != null)
        //{
        //    Cosmetic = product;
        //    _currentProductId = productId;
        //}
    }

    public async Task LoadNextProduct()
    {
        //var nextProduct = await Task.Run(() => CosmeticDao.GetNextCosmetic(_currentProductId));
        //if (nextProduct != null)
        //{
        //    Cosmetic = nextProduct;
        //    _currentProductId = nextProduct.ID;
        //}
    }

    public async Task LoadPreviousProduct()
    {
        //var previousProduct = await Task.Run(() => CosmeticDao.GetPreviousCosmetic(_currentProductId));
        //if (previousProduct != null)
        //{
        //    Cosmetic = previousProduct;
        //    _currentProductId = previousProduct.ID;
        //}
    }

    public ProductViewModel()
    {
        
    }
}
