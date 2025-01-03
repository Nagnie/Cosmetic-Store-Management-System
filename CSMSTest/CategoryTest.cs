using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Appium.Windows;

namespace CSMSTest
{
    [TestClass]
    public class CategoryTest : AppSession
    {
        [TestMethod]
        public void AddCategory_EmptyName_Fail()
        {
            NavigateToCategoryPage();
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
        public void AddCategory_DuplicateName_Fail()
        {
            var time = DateTime.Now.Ticks + "";
            NavigateToCategoryPage();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test" + time);
            session.FindElementByAccessibilityId("saveButton").Click();
            session.FindElementByName("OK").Click();

            session.FindElementByAccessibilityId("nameInput").SendKeys("Test" + time);
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
        public void AddCategory_ValidName_Success()
        {
            var time = DateTime.Now.Ticks + "";
            NavigateToCategoryPage();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test" + time);
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
        public void EditCategory_EmptyName_Fail()
        {
            NavigateToCategoryPage();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("nameInput").Clear();
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
        public void EditCategory_DuplicatedName_Fail()
        {
            var time = DateTime.Now.Ticks + "";
            NavigateToCategoryPage();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test" + time);
            session.FindElementByAccessibilityId("saveButton").Click();
            session.FindElementByName("OK").Click();

            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("nameInput").Clear();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test" + time);
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
        public void EditCategory_ValidName_Success()
        {
            var time = DateTime.Now.Ticks + "";
            NavigateToCategoryPage();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("nameInput").Clear();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test" + time);
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
