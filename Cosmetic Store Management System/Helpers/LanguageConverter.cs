using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using Microsoft.UI.Xaml.Data;
using Newtonsoft.Json;

namespace Cosmetic_Store_Management_System.Helpers
{
    public class LanguageConverter : IValueConverter
    {
        public static async Task<string> Translate(string text, string source, string target)
        {
            string translatedText = "";
            var url = $"https://api.mymemory.translated.net/get?q={Uri.EscapeDataString(text)}&langpair={source}|{target}";
            using (var client = new HttpClient())
            {
                try
                {
                    var response = await client.GetAsync(url);
                    response.EnsureSuccessStatusCode(); // Throws if the response is not successful
                    var jsonResponse = await response.Content.ReadAsStringAsync();
                    dynamic json = JsonConvert.DeserializeObject(jsonResponse);
                    translatedText = json["responseData"]["translatedText"];
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error: {ex.Message}");
                }
            }

            return translatedText;
        }

        public async Task<object> ConvertAsync(object value, Type targetType, object parameter, CultureInfo culture)
        {

            if (value is string text)
            {
                return await Translate(text, "en", "vi");
            }
            return value;
        }

        public object Convert(object value, Type targetType, object parameter, string language) => throw new NotImplementedException();

        public object ConvertBack(object value, Type targetType, object parameter, string language) => throw new NotImplementedException();
    }
}
