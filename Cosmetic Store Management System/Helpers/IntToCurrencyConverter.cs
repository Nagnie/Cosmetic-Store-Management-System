using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.UI.Xaml.Data;

namespace Cosmetic_Store_Management_System.Helpers
{
    public class IntToCurrencyConverter : IValueConverter
    {

        public object Convert(object value, Type targetType, object parameter, string language)
        {
            CultureInfo culture = new CultureInfo("vi-VN");
            return ((int)value).ToString("C0", culture);
        }
        public object ConvertBack(object value, Type targetType, object parameter, string language) => throw new NotImplementedException();
    }
}
