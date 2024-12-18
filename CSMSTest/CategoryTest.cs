using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Appium.Windows;

namespace CSMSTest
{
    [TestClass]
    public class CategoryTest : AppSession
    {
        [TestMethod]
        public void AddCategory_NotEnterName_InvalidDialog()
        {
            NavigateToCategoryPage();
            session.FindElementByAccessibilityId("addCategoryButton").Click();
            session.FindElementByAccessibilityId("saveButton").Click();

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
        public void AddCategory_EnterValidName_Success()
        {
            NavigateToCategoryPage();
            session.FindElementByAccessibilityId("addCategoryButton").Click();
            session.FindElementByAccessibilityId("categoryNameTextBox").SendKeys(DateTime.Now.Ticks + "");
            session.FindElementByAccessibilityId("saveButton").Click();

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
        public void AddCategory_EnterExistedName_InvalidDialog()
        {
            NavigateToCategoryPage();
            var categoryName = DateTime.Now.Ticks + "";
            session.FindElementByAccessibilityId("addCategoryButton").Click();
            session.FindElementByAccessibilityId("categoryNameTextBox").SendKeys(categoryName);
            session.FindElementByAccessibilityId("saveButton").Click();
            session.FindElementByName("OK").Click();

            session.FindElementByAccessibilityId("addCategoryButton").Click();
            session.FindElementByAccessibilityId("categoryNameTextBox").SendKeys(categoryName);
            session.FindElementByAccessibilityId("saveButton").Click();

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

        public static void NavigateToCategoryPage()
        {

            var navbar = session.FindElementByAccessibilityId("MenuItemsScrollViewer");

            try
            {
                navbar.FindElementByName("Category").Click();
            }
            catch (Exception)
            {
                navbar.FindElementByName("Danh mục").Click();
            }
        }
    }
}
