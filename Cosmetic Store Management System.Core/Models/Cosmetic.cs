using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.UI.Xaml.Media.Imaging;

namespace Cosmetic_Store_Management_System.Core.Models;
public class Cosmetic : INotifyPropertyChanged
{
    public int ID { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public Category Category { get; set; }

    public Manufacturer Manufacturer { get; set; }

    public int Price { get; set; }

    public int Quantity { get; set; }

    public byte[] ImageData { get; set; }

    //private BitmapImage _image;
    //public BitmapImage Image
    //{
    //    get
    //    {
    //        if (_image == null && ImageData != null)
    //        {
    //            _image = LoadBitmapImage(ImageData);
    //        }
    //        return _image;
    //    }
    //    set
    //    {
    //        _image = value;
    //        OnPropertyChanged(nameof(Image));
    //    }
    //}

    public event PropertyChangedEventHandler PropertyChanged;

    protected void OnPropertyChanged(string propertyName) =>
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));

    //private BitmapImage LoadBitmapImage(byte[] imageData)
    //{
    //    var bitmapImage = new BitmapImage();
    //    using (var stream = new MemoryStream(imageData))
    //    {
    //        stream.Seek(0, SeekOrigin.Begin);
    //        bitmapImage.SetSourceAsync(stream.AsRandomAccessStream()).AsTask().Wait();
    //    }
    //    return bitmapImage;
    //}

}
