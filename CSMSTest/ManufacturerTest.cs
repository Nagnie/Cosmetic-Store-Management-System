using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CSMSTest
{
    [TestClass]
    public class ManufacturerTest : AppSession
    {
        [TestMethod]
        public void AddManufacturer_EmptyName_Fail()
        {
            NavigateToManufacturerPage();
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
        public void AddManufacturer_EmptyOrigin_Fail()
        {
            NavigateToManufacturerPage();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test");
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
        public void AddManufacturer_DuplicateName_Fail()
        {
            var time = DateTime.Now.Ticks + "";
            NavigateToManufacturerPage();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test" + time);
            session.FindElementByAccessibilityId("originInput").SendKeys("Test" + time);
            session.FindElementByAccessibilityId("saveButton").Click();
            session.FindElementByName("OK").Click();

            session.FindElementByAccessibilityId("nameInput").SendKeys("Test" + time);
            session.FindElementByAccessibilityId("originInput").SendKeys("Test" + time);
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
        public void AddManufacturer_ValidNameAndOrigin_Success()
        {
            var time = DateTime.Now.Ticks + "";
            NavigateToManufacturerPage();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test" + time);
            session.FindElementByAccessibilityId("originInput").SendKeys("Test" + time);
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
        public void EditManufacturer_EmptyName_Fail()
        {
            NavigateToManufacturerPage();
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
        public void EditManufacturer_EmptyOrigin_Fail()
        {
            NavigateToManufacturerPage();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("originInput").Clear();
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
        public void EditManufacturer_DuplicateName_Fail()
        {
            var time = DateTime.Now.Ticks + "";
            NavigateToManufacturerPage();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test" + time);
            session.FindElementByAccessibilityId("originInput").SendKeys("Test" + time);
            session.FindElementByAccessibilityId("saveButton").Click();
            session.FindElementByName("OK").Click();

            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("nameInput").Clear();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test" + time);
            session.FindElementByAccessibilityId("originInput").Clear();
            session.FindElementByAccessibilityId("originInput").SendKeys("Test" + time);
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
        public void EditManufacturer_ValidNameAndOrigin_Success()
        {
            var time = DateTime.Now.Ticks + "";
            NavigateToManufacturerPage();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("nameInput").Clear();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test" + time);
            session.FindElementByAccessibilityId("originInput").Clear();
            session.FindElementByAccessibilityId("originInput").SendKeys("Test" + time);
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

        public static void NavigateToManufacturerPage()
        {

            var navbar = session.FindElementByAccessibilityId("MenuItemsScrollViewer");

            try
            {
                navbar.FindElementByName("Manufacturer").Click();
            }
            catch (Exception)
            {
                navbar.FindElementByName("Thương hiệu").Click();
            }
        }
    }
}
