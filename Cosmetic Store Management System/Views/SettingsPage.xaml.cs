using Cosmetic_Store_Management_System.ViewModels;
using Microsoft.UI.Xaml.Controls;
using Windows.Foundation.Collections;
using Microsoft.UI.Dispatching;
using CommunityToolkit.WinUI;
using System.Diagnostics;
using System.Runtime.InteropServices;
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

        if (ViewModel.DisplayLanguage == "vi-VN")
        {
            VietnameseButton.IsChecked = true;
        }
        else
        {
            EnglishButton.IsChecked = true;
        }
    }

    private void VietnameseButton_Checked(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
    {
        UpdateLanguage("vi-VN");
    }

    private void EnglishButton_Checked(object sender, Microsoft.UI.Xaml.RoutedEventArgs e)
    {
        UpdateLanguage("en-US");
    }

    private void UpdateLanguage(string languageCode)
    {
        if (ViewModel.DisplayLanguage != languageCode)
        {
            ViewModel.SetDisplayLanguage(languageCode);
            RefreshUI();
        }
    }

    private void RefreshUI()
    {
        Debug.WriteLine(Windows.Globalization.ApplicationLanguages.PrimaryLanguageOverride);
        var resourceLoader = Windows.ApplicationModel.Resources.ResourceLoader.GetForViewIndependentUse();
        EnglishButton.Content = resourceLoader.GetString("Settings_Language_English/Content");
        VietnameseButton.Content = resourceLoader.GetString("Settings_Language_Vietnamese/Content");
        settingLanguageHeader.Text = resourceLoader.GetString("Settings_Language/Text");
    }
}
