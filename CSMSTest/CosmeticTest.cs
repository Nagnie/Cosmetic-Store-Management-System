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
                session.FindElementByName("Name cannot be empty!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Tên không được để trống!\n");
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
                session.FindElementByName("Please select a category!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Vui lòng chọn danh mục sản phẩm!\n");
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
                session.FindElementByName("Please select a manufacturer!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Vui lòng chọn hãng sản xuất!\n");
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
                session.FindElementByName("Invalid quantity!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Số lượng không hợp lệ!\n");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCosmetic_QuantityIsNaN_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("name").SendKeys("Test");
            session.FindElementByAccessibilityId("categoryComboBox").Click();
            session.FindElementByName("Kem chống nắng").Click();
            session.FindElementByAccessibilityId("manufacturerComboBox").Click();
            session.FindElementByName("Olay").Click();
            session.FindElementByAccessibilityId("quantity").Clear();
            session.FindElementByAccessibilityId("quantity").SendKeys("abc");
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("Invalid quantity!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Số lượng không hợp lệ!\n");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCosmetic_QuantityIsNegativeNumber_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("name").SendKeys("Test");
            session.FindElementByAccessibilityId("categoryComboBox").Click();
            session.FindElementByName("Kem chống nắng").Click();
            session.FindElementByAccessibilityId("manufacturerComboBox").Click();
            session.FindElementByName("Olay").Click();
            session.FindElementByAccessibilityId("quantity").Clear();
            session.FindElementByAccessibilityId("quantity").SendKeys("-100");
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("Invalid quantity!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Số lượng không hợp lệ!\n");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCosmetic_QuantityIsNotInt_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("name").SendKeys("Test");
            session.FindElementByAccessibilityId("categoryComboBox").Click();
            session.FindElementByName("Kem chống nắng").Click();
            session.FindElementByAccessibilityId("manufacturerComboBox").Click();
            session.FindElementByName("Olay").Click();
            session.FindElementByAccessibilityId("quantity").Clear();
            session.FindElementByAccessibilityId("quantity").SendKeys("10.5");
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("Invalid quantity!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Số lượng không hợp lệ!\n");
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
                session.FindElementByName("Invalid price!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Giá không hợp lệ!\n");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCosmetic_PriceIsNaN_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("name").SendKeys("Test");
            session.FindElementByAccessibilityId("categoryComboBox").Click();
            session.FindElementByName("Kem chống nắng").Click();
            session.FindElementByAccessibilityId("manufacturerComboBox").Click();
            session.FindElementByName("Olay").Click();
            session.FindElementByAccessibilityId("quantity").Clear();
            session.FindElementByAccessibilityId("quantity").SendKeys("10");
            session.FindElementByAccessibilityId("price").Clear();
            session.FindElementByAccessibilityId("price").SendKeys("abc");
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("Invalid price!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Giá không hợp lệ!\n");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCosmetic_PriceIsNegativeNumber_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("name").SendKeys("Test");
            session.FindElementByAccessibilityId("categoryComboBox").Click();
            session.FindElementByName("Kem chống nắng").Click();
            session.FindElementByAccessibilityId("manufacturerComboBox").Click();
            session.FindElementByName("Olay").Click();
            session.FindElementByAccessibilityId("quantity").Clear();
            session.FindElementByAccessibilityId("quantity").SendKeys("100");
            session.FindElementByAccessibilityId("price").Clear();
            session.FindElementByAccessibilityId("price").SendKeys("-100");
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("Invalid price!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Giá không hợp lệ!\n");
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
                session.FindElementByName("Please upload product image!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Vui lòng tải ảnh sản phẩm!\n");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCosmetic_ValidInput_Success()
        {
            NavigateToCosmeticPage();
            var time = DateTime.Now.Ticks + "";
            session.FindElementByAccessibilityId("addNewButton").Click();
            Thread.Sleep(1000);
            session.FindElementByAccessibilityId("name").SendKeys("Test" + time);
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
                session.FindElementByName("Name cannot be empty.\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Tên không thể để trống.\n");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCosmetic_QuantityIsNegative_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("productDetailButton").Click();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("quantity").Clear();
            session.FindElementByAccessibilityId("quantity").SendKeys("-10");
            session.FindElementByAccessibilityId("updateButton").Click();

            try
            {
                session.FindElementByName("Invalid quantity!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Số lượng không hợp lệ!\n");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCosmetic_QuantityIsNaN_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("productDetailButton").Click();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("quantity").Clear();
            session.FindElementByAccessibilityId("quantity").SendKeys("abc");
            session.FindElementByAccessibilityId("updateButton").Click();

            try
            {
                session.FindElementByName("Invalid quantity!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Số lượng không hợp lệ!\n");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCosmetic_QuantityIsNotInt_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("productDetailButton").Click();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("quantity").Clear();
            session.FindElementByAccessibilityId("quantity").SendKeys("12.5");
            session.FindElementByAccessibilityId("updateButton").Click();

            try
            {
                session.FindElementByName("Invalid quantity!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Số lượng không hợp lệ!\n");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCosmetic_PriceIsNegative_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("productDetailButton").Click();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("price").Clear();
            session.FindElementByAccessibilityId("price").SendKeys("-10");
            session.FindElementByAccessibilityId("updateButton").Click();

            try
            {
                session.FindElementByName("Invalid price!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Giá không hợp lệ!\n");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCosmetic_PriceIsNaN_Fail()
        {
            NavigateToCosmeticPage();
            session.FindElementByAccessibilityId("productDetailButton").Click();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("price").Clear();
            session.FindElementByAccessibilityId("price").SendKeys("abc");
            session.FindElementByAccessibilityId("updateButton").Click();

            try
            {
                session.FindElementByName("Invalid price!\n");
            }
            catch (Exception)
            {
                session.FindElementByName("Giá không hợp lệ!\n");
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
                navbar.FindElementByName("Product").Click();
            }
            catch (Exception)
            {
                navbar.FindElementByName("Sản phẩm").Click();
            }
        }
    }
}
