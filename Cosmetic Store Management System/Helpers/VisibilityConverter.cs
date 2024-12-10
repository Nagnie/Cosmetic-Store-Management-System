using Microsoft.UI.Xaml.Data;
using Microsoft.UI.Xaml;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Data;

namespace Cosmetic_Store_Management_System.Helpers;
public class VisibilityConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, string language)
    {
        return value is int count && count > 0 ? Visibility.Visible : Visibility.Collapsed;
    }

    public object ConvertBack(object value, Type targetType, object parameter, string language)
    {
        return null;
    }
}
