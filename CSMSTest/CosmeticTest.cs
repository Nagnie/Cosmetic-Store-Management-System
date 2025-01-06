using System;
using System.Threading;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;

namespace CSMSTest
{
    [TestClass]
    public class CosmeticTest : AppSession
    {
        [TestMethod]
        public void AddCosmetic_EmptyName_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("Unable to add product");
            }
            catch (Exception)
            {
                session.FindElementByName("Không thể thêm sản phẩm");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCosmetic_NotSelectCategory_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("name").SendKeys("Test");
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("Unable to add product");
            }
            catch (Exception)
            {
                session.FindElementByName("Không thể thêm sản phẩm");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCosmetic_NotSelectManufacturer_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("name").SendKeys("Test");
            session.FindElementByAccessibilityId("categoryComboBox").Click();
            session.FindElementByXPath("//ComboBox[@AutomationId='categoryComboBox']/ListItem[1]").Click();
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("Unable to add product");
            }
            catch (Exception)
            {
                session.FindElementByName("Không thể thêm sản phẩm");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCosmetic_NotEnterQuantity_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("name").SendKeys("Test");
            session.FindElementByAccessibilityId("categoryComboBox").Click();
            session.FindElementByName("Kem chống nắng").Click();
            session.FindElementByAccessibilityId("manufacturerComboBox").Click();
            session.FindElementByName("Olay").Click();
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("Unable to add product");
            }
            catch (Exception)
            {
                session.FindElementByName("Không thể thêm sản phẩm");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCosmetic_NotEnterPrice_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("name").SendKeys("Test");
            session.FindElementByAccessibilityId("categoryComboBox").Click();
            session.FindElementByName("Kem chống nắng").Click();
            session.FindElementByAccessibilityId("manufacturerComboBox").Click();
            session.FindElementByName("Olay").Click();
            session.FindElementByAccessibilityId("quantity").SendKeys("10");
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("Unable to add product");
            }
            catch (Exception)
            {
                session.FindElementByName("Không thể thêm sản phẩm");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCosmetic_NotUploadImage_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("name").SendKeys("Test");
            session.FindElementByAccessibilityId("categoryComboBox").Click();
            session.FindElementByName("Kem chống nắng").Click();
            session.FindElementByAccessibilityId("manufacturerComboBox").Click();
            session.FindElementByName("Olay").Click();
            session.FindElementByAccessibilityId("quantity").SendKeys("10");
            session.FindElementByAccessibilityId("price").SendKeys("100000");
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("Unable to add product");
            }
            catch (Exception)
            {
                session.FindElementByName("Không thể thêm sản phẩm");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCosmetic_ValidInput_Success()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("name").SendKeys("Test");
            session.FindElementByAccessibilityId("categoryComboBox").Click();
            session.FindElementByName("Kem chống nắng").Click();
            session.FindElementByAccessibilityId("manufacturerComboBox").Click();
            session.FindElementByName("Olay").Click();
            session.FindElementByAccessibilityId("quantity").SendKeys("10");
            session.FindElementByAccessibilityId("price").SendKeys("100000");
            session.FindElementByAccessibilityId("PickAPhotoButton").Click();
            Thread.Sleep(1000);
            session.FindElementByName("New Volume (D:)").Click();
            var filename = session.FindElementByClassName("Edit");
            filename.Clear();
            filename.SendKeys("D:\\WP\\Project\\Cosmetic-Store-Management-System\\Cosmetic Store Management System\\Assets\\background.jpg");
            filename.SendKeys(Keys.Enter);
            session.FindElementByAccessibilityId("saveButton").Click();
            Thread.Sleep(1000);

            try
            {
                session.FindElementByName("Success");
            }
            catch (Exception)
            {
                session.FindElementByName("Thành công");
            }
            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void DeleteCosmetic()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("deleteButton").Click();
            try
            {
                session.FindElementByName("Are you sure you want to delete this category?");
                session.FindElementByName("Yes").Click();
                session.FindElementByName("Product is deleted successfully!");
            }
            catch (Exception)
            {
                session.FindElementByName("Bạn có chắc chắn muốn xóa danh mục này không?");
                session.FindElementByName("Có").Click();
                session.FindElementByName("Sản phẩm đã được xóa thành công!");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCosmetic_ValidInput_Success()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("productDetailButton").Click();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("updateButton").Click();

            try
            {
                session.FindElementByName("Success");
            }
            catch (Exception)
            {
                session.FindElementByName("Thành công");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCosmetic_EmptyName_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("productDetailButton").Click();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("name").Clear();
            session.FindElementByAccessibilityId("updateButton").Click();

            try
            {
                session.FindElementByName("Please enter product name");
            }
            catch (Exception)
            {
                session.FindElementByName("Vui lòng nhập tên sản phẩm");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCosmetic_InvalidQuantity_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("productDetailButton").Click();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("quantity").Clear();
            session.FindElementByAccessibilityId("quantity").SendKeys("-10");
            session.FindElementByAccessibilityId("updateButton").Click();

            try
            {
                session.FindElementByName("Please enter a valid quantity");
            }
            catch (Exception)
            {
                session.FindElementByName("Vui lòng nhập số lượng hợp lệ");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCosmetic_InvalidPrice_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("productDetailButton").Click();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("price").Clear();
            session.FindElementByAccessibilityId("price").SendKeys("-10");
            session.FindElementByAccessibilityId("updateButton").Click();

            try
            {
                session.FindElementByName("Please enter a valid price");
            }
            catch (Exception)
            {
                session.FindElementByName("Vui lòng nhập giá hợp lệ");
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

        public static void NavigateToCosmeticPage()
        {

            var navbar = session.FindElementByAccessibilityId("MenuItemsScrollViewer");

            try
            {
                navbar.FindElementByName("Cosmetic").Click();
            }
            catch (Exception)
            {
                navbar.FindElementByName("Sản phẩm").Click();
            }
        }
    }
}
