using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CSMSTest
{
    [TestClass]
    public class CreateOrder : AppSession
    {
        [TestMethod]
        public void AddCustomer_EmptyPhone_Fail()
        {
            NavigateToCreateOrderPage();
            session.FindElementByAccessibilityId("saveCustomerButton").Click();
            try
            {
                session.FindElementByName("Lỗi");
            }
            catch (Exception)
            {
                session.FindElementByName("Error");
            }
            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCustomer_EmptyName_Fail()
        {
            var phone = GenerateRandomPhoneNumber();
            NavigateToCreateOrderPage();
            session.FindElementByAccessibilityId("phoneNumberTextBox").SendKeys(phone);
            session.FindElementByAccessibilityId("saveCustomerButton").Click();
            try
            {
                session.FindElementByName("Lỗi");
            }
            catch (Exception)
            {
                session.FindElementByName("Error");
            }
            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCustomer_ValidPhoneAndName_Success()
        {
            var phone = GenerateRandomPhoneNumber();
            NavigateToCreateOrderPage();
            session.FindElementByAccessibilityId("phoneNumberTextBox").SendKeys(phone);
            session.FindElementByAccessibilityId("nameTextBox").SendKeys("Test");
            session.FindElementByAccessibilityId("saveCustomerButton").Click();
            try
            {
                session.FindElementByName("Thành công");
            }
            catch (Exception)
            {
                session.FindElementByName("Success");
            }
            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void FindCustomer_EmptyPhone_Fail()
        {
            var phone = GenerateRandomPhoneNumber();
            NavigateToCreateOrderPage();
            session.FindElementByAccessibilityId("phoneNumberTextBox").SendKeys(phone);
            session.FindElementByAccessibilityId("searchButton").Click();
            try
            {
                session.FindElementByName("Lỗi");
            }
            catch (Exception)
            {
                session.FindElementByName("Error");
            }
            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void FindCustomer_ValidPhone_Success()
        {
            var phone = GenerateRandomPhoneNumber();
            NavigateToCreateOrderPage();
            session.FindElementByAccessibilityId("phoneNumberTextBox").SendKeys(phone);
            session.FindElementByAccessibilityId("nameTextBox").SendKeys("Test");
            session.FindElementByAccessibilityId("saveCustomerButton").Click();
            session.FindElementByName("OK").Click();

            NavigateToOverviewsPage();
            NavigateToCreateOrderPage();
            session.FindElementByAccessibilityId("phoneNumberTextBox").SendKeys(phone);
            session.FindElementByAccessibilityId("searchButton").Click();
            Assert.IsNotNull(session.FindElementByAccessibilityId("phoneNumberTextBox").Text);
            Assert.IsNotNull(session.FindElementByAccessibilityId("nameTextBox").Text);
            Assert.IsNotNull(session.FindElementByAccessibilityId("pointTextBox").Text);
        }

        [ClassInitialize]
        public static void ClassInitialize(TestContext context)
        {
            Setup(context);
            Login();
        }

        [ClassCleanup]
        public static void ClassCleanup()
        {
            TearDown();
        }

        public static void NavigateToCreateOrderPage()
        {

            var navbar = session.FindElementByAccessibilityId("MenuItemsScrollViewer");

            try
            {
                navbar.FindElementByName("Create Order").Click();
            }
            catch (Exception)
            {
                navbar.FindElementByName("Tạo đơn hàng").Click();
            }
        }

        public static void NavigateToOverviewsPage()
        {

            var navbar = session.FindElementByAccessibilityId("MenuItemsScrollViewer");

            try
            {
                navbar.FindElementByName("Overviews").Click();
            }
            catch (Exception)
            {
                navbar.FindElementByName("Tổng quan").Click();
            }
        }

        private string GenerateRandomPhoneNumber()
        {
            Random random = new Random();
            var phoneNumber = "";
            for (var i = 0; i < 10; i++)
            {
                phoneNumber += random.Next(0, 10).ToString();
            }
            return phoneNumber;
        }
    }
}
