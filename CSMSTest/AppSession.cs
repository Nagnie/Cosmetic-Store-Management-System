using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Appium.Windows;
using OpenQA.Selenium.Remote;
using System;
using System.Linq;

namespace CSMSTest
{
    public class AppSession
    {
        // Note: append /wd/hub to the URL if you're directing the test at Appium
        private const string WindowsApplicationDriverUrl = "http://127.0.0.1:4723";
        private const string AppID = "edcd40e4-f6c4-40e2-9d14-9860de85fc1c_8814as6m9m5b0!App";

        protected static WindowsDriver<WindowsElement> session;

        public static void Setup(TestContext context)
        {
            // Launch application if it is not yet launched
            if (session == null)
            {
                // Create a new session to bring up an instance of the application
                DesiredCapabilities appCapabilities = new DesiredCapabilities();
                appCapabilities.SetCapability("app", AppID);
                appCapabilities.SetCapability("deviceName", "WindowsPC");
                session = new WindowsDriver<WindowsElement>(new Uri(WindowsApplicationDriverUrl), appCapabilities);
                Assert.IsNotNull(session);

                // Set implicit timeout to 1.5 seconds to make element search to retry every 500 ms for at most three times
                session.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(1.5);
            }
        }

        public static void TearDown()
        {
            // Close the application and delete the session
            if (session != null)
            {
                session.Quit();
                session = null;
            }
        }

        public static void Login()
        {
            if (session != null)
            {
                var usernameTextBox = session.FindElementByAccessibilityId("usernameTextBox");
                usernameTextBox.Clear();
                usernameTextBox.SendKeys("admin");

                var passwordBox = session.FindElementByAccessibilityId("passwordBox");
                passwordBox.Clear();
                passwordBox.SendKeys("1234");

                session.FindElementByAccessibilityId("loginButton").Click();
                var mainWindow = session.WindowHandles.Last();
                session.SwitchTo().Window(mainWindow);
            }
        }
    }
}
