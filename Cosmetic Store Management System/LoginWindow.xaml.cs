using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Security.Cryptography;
using System.Text;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Controls.Primitives;
using Microsoft.UI.Xaml.Data;
using Microsoft.UI.Xaml.Input;
using Microsoft.UI.Xaml.Media;
using Microsoft.UI.Xaml.Navigation;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.Storage;

using Cosmetic_Store_Management_System.Helpers;

using Windows.UI.ViewManagement;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace Cosmetic_Store_Management_System;
/// <summary>
/// An empty window that can be used on its own or navigated to within a Frame.
/// </summary>
public sealed partial class LoginWindow : Window
{
    public LoginWindow()
    {
        this.InitializeComponent();
    }

    private void Window_Activated(
    object sender, WindowActivatedEventArgs args)
    {
        var localSettings = ApplicationData.Current.LocalSettings;
        if (localSettings.Values.ContainsKey("username"))
        {
            usernameTextBox.Text = localSettings.Values["username"].ToString();

            var encryptedPasswordInBase64 = localSettings.Values["password"].ToString();
            var entropyInBase64 = localSettings.Values["entropy"].ToString();

            var encryptedPasswordInBytes = Convert.FromBase64String(encryptedPasswordInBase64);
            var entropyInBytes = Convert.FromBase64String(entropyInBase64);

            var passwordInBytes = ProtectedData.Unprotect(
                encryptedPasswordInBytes,
                entropyInBytes,
                DataProtectionScope.CurrentUser);

            var password = Encoding.UTF8.GetString(passwordInBytes);

            passwordBox.Password = password;
        }
    }

    private async void loginButton_Click(object sender, RoutedEventArgs e)
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        var username = usernameTextBox.Text;
        var password = passwordBox.Password;

        if ((username == "admin") && (password == "1234"))
        {
            if (rememberCheckBox.IsChecked == true)
            {
                // Mã hóa mật khẩu
                var passwordInBytes = Encoding.UTF8.GetBytes(password);
                var entropyInBytes = new byte[20];
                using (var rng = RandomNumberGenerator.Create())
                {
                    rng.GetBytes(entropyInBytes);
                }
                var encryptedPassword = ProtectedData.Protect(
                        passwordInBytes,
                        entropyInBytes,
                        DataProtectionScope.CurrentUser);
                var encryptedPasswordInBase64 = Convert.ToBase64String(encryptedPassword);
                var entropyInBase64 = Convert.ToBase64String(entropyInBytes);

                var localSettings = ApplicationData.Current.LocalSettings;
                localSettings.Values["username"] = username;
                localSettings.Values["password"] = encryptedPasswordInBase64;
                localSettings.Values["entropy"] = entropyInBase64;
            }

            App.MainWindow.Activate();

            this.Close();
        }
        else
        {
            await new ContentDialog()
            {
                Name = "loginFailedDialog",
                XamlRoot = this.Content.XamlRoot,
                Content = language.Equals("en-US") 
                        ? "Invalid username or password!"
                        : "Tên đăng nhập hoặc mật khẩu chưa đúng!",
                CloseButtonText = "OK"
            }.ShowAsync();
        }
    }
}
