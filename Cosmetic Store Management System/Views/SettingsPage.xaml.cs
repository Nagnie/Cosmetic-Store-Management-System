using Cosmetic_Store_Management_System.Helpers;
using Cosmetic_Store_Management_System.ViewModels;

using Microsoft.UI.Xaml.Controls;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.Views;

// TODO: Set the URL for your privacy policy by updating SettingsPage_PrivacyTermsLink.NavigateUri in Resources.resw.
public sealed partial class SettingsPage : Page
{
    public SettingsViewModel ViewModel
    {
        get;
    }

    public SettingsPage()
    {
        ViewModel = App.GetService<SettingsViewModel>();
        InitializeComponent();

        var localSettings = ApplicationData.Current.LocalSettings;
        var currencyUnit = localSettings.Values["CurrencyUnit"] as string;

        if (currencyUnit == "USD")
        {
            Settings_Currency_USD.IsChecked = true;
        }
        else
        {
            Settings_Currency_VND.IsChecked = true;
        }
    }

    private void Settings_Currency_VND_Check(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
    {
        var localSettings = ApplicationData.Current.LocalSettings;
        localSettings.Values["CurrencyUnit"] = "VND";
    }

    private async void Settings_Currency_USD_Check(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
    {
        var localSettings = ApplicationData.Current.LocalSettings;
        localSettings.Values["CurrencyUnit"] = "USD";
        localSettings.Values["ExchangeRate"] = (float)25405;
        //localSettings.Values["ExchangeRate"] = await ExchangeRateHelper.GetExchangeRate("USD", "VND");
    }
}
