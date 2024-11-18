using System.Diagnostics;
using System.Reflection;
using System.Windows.Input;

using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;

using Cosmetic_Store_Management_System.Contracts.Services;
using Cosmetic_Store_Management_System.Helpers;

using Microsoft.UI.Xaml;

using Windows.ApplicationModel;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.ViewModels;

public partial class SettingsViewModel : ObservableRecipient
{
    private readonly IThemeSelectorService _themeSelectorService;

    [ObservableProperty]
    private ElementTheme _elementTheme;

    [ObservableProperty]
    private string _versionDescription;

    public string DisplayLanguage = (string)ApplicationData.Current.LocalSettings.Values["appLanguage"];
    
    public ICommand SwitchThemeCommand
    {
        get;
    }

    public SettingsViewModel(IThemeSelectorService themeSelectorService)
    {
        _themeSelectorService = themeSelectorService;
        _elementTheme = _themeSelectorService.Theme;
        _versionDescription = GetVersionDescription();

        SwitchThemeCommand = new RelayCommand<ElementTheme>(
            async (param) =>
            {
                if (ElementTheme != param)
                {
                    ElementTheme = param;
                    await _themeSelectorService.SetThemeAsync(param);
                }
            });
    }

    private static string GetVersionDescription()
    {
        Version version;

        if (RuntimeHelper.IsMSIX)
        {
            var packageVersion = Package.Current.Id.Version;

            version = new(packageVersion.Major, packageVersion.Minor, packageVersion.Build, packageVersion.Revision);
        }
        else
        {
            version = Assembly.GetExecutingAssembly().GetName().Version!;
        }

        return $"{"AppDisplayName".GetLocalized()} - {version.Major}.{version.Minor}.{version.Build}.{version.Revision}";
    }

    public void SetDisplayLanguage(string language)
    {
        if (DisplayLanguage != language)
        {
            DisplayLanguage = language;
            ApplicationData.Current.LocalSettings.Values["appLanguage"] = language;
            Windows.Globalization.ApplicationLanguages.PrimaryLanguageOverride = language;
        }
    }
}
