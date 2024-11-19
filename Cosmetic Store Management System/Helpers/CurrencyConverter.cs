using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;
using Microsoft.UI.Xaml.Data;

namespace Cosmetic_Store_Management_System.Helpers;
public class CurrencyConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, string language)
    {
        if (value is int price)
        {
            CultureInfo viCulture = new CultureInfo("vi-VN");
            return string.Format(viCulture, "{0:C0}", price);
        }
        return value;
    }

    public object ConvertBack(object value, Type targetType, object parameter, string language)
    {
        throw new NotImplementedException();
    }
}

