using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.UI.Xaml.Data;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.Helpers
{
    public class IntToCurrencyConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, string language)
        {
            var localSettings = ApplicationData.Current.LocalSettings;
            var unit = localSettings.Values["CurrencyUnit"].ToString();
            var amount = (int)value;

            if (unit == "USD")
            {
                var usCulture = new CultureInfo("en-US");
                var exchangeRate = (float)localSettings.Values["ExchangeRate"];
                var USDamount = (float)(amount/exchangeRate);
                var formattedAmount = USDamount.ToString("C2", usCulture);

                return formattedAmount;
            }

            CultureInfo culture = new CultureInfo("vi-VN");
            return amount.ToString("C0", culture);
        }
        public object ConvertBack(object value, Type targetType, object parameter, string language) => throw new NotImplementedException();
    }
}
