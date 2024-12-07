using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.UI.Xaml.Media.Imaging;
using Cosmetic_Store_Management_System.Core.Models;
using CommunityToolkit.Mvvm.ComponentModel;

namespace Cosmetic_Store_Management_System.ViewModels;
public class ExtraOrderDetailsViewModel : ObservableRecipient
{
    public OrderDetail OrderDetail
    {
        get; set;
    }

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
}
