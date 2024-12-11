using System;
using System.Diagnostics;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Threading;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Appium.Windows;

namespace CSMSTest
{
    [TestClass]
    public class LoginTest : AppSession
    {
        [ClassInitialize]
        public static void ClassInitialize(TestContext context)
        {
            Setup(context);
        }

        [ClassCleanup]
        public static void ClassCleanup()
        {
            TearDown();
        }

        [TestMethod]
        public void Login_WrongUsernameOrPassword_Fail()
        {
            var usernameTextBox = session.FindElementByAccessibilityId("usernameTextBox");
            usernameTextBox.Clear();
            usernameTextBox.SendKeys("admin");

            var passwordBox = session.FindElementByAccessibilityId("passwordBox");
            passwordBox.Clear();
            passwordBox.SendKeys("123456");

            session.FindElementByAccessibilityId("loginButton").Click();
            Assert.IsTrue(IsFailedDialogShown());
        }

        [TestMethod]
        public void Login_RightUsernameAndPassword_Success()
        {
            var usernameTextBox = session.FindElementByAccessibilityId("usernameTextBox");
            usernameTextBox.Clear();
            usernameTextBox.SendKeys("admin");

            var passwordBox = session.FindElementByAccessibilityId("passwordBox");
            passwordBox.Clear();
            passwordBox.SendKeys("1234");

            session.FindElementByAccessibilityId("loginButton").Click();
            Assert.IsFalse(IsFailedDialogShown());
        }

        private bool IsFailedDialogShown()
        {
            try
            {
                var invalidMessage = session.FindElementByName("Invalid username or password!");
                return true;
            }
            catch (Exception)
            {
                try
                {
                    var invalidMessage = session.FindElementByName("Tên đăng nhập hoặc mật khẩu chưa đúng!");
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
    }
}
