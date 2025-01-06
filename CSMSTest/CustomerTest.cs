using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CSMSTest
{
    [TestClass]
    public class CustomerTest : AppSession
    {
        [TestMethod]
        public void AddCustomer_EmptyName_Fail()
        {
            var phone = GenerateRandomPhoneNumber();
            NavigateToCustomerPage();
            session.FindElementByAccessibilityId("nameInput").Clear();
            session.FindElementByAccessibilityId("phoneNumberInput").Clear();
            session.FindElementByAccessibilityId("phoneNumberInput").SendKeys(phone);
            session.FindElementByAccessibilityId("saveButton").Click();
            try
            {
                session.FindElementByName("Please enter Customer's name");
            }
            catch (Exception)
            {
                session.FindElementByName("Vui lòng nhập tên khách hàng!");
            }
            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCustomer_EmptyPhone_Fail()
        {
            NavigateToCustomerPage();
            session.FindElementByAccessibilityId("nameInput").Clear();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test");
            session.FindElementByAccessibilityId("phoneNumberInput").Clear();
            session.FindElementByAccessibilityId("saveButton").Click();
            try
            {
                session.FindElementByName("Please enter a valid Customer's phone number!");
            }
            catch (Exception)
            {
                session.FindElementByName("Vui lòng nhập số điện thoại khách hàng hợp lệ!");
            }
            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCustomer_PhoneContainsChar_Fail()
        {
            NavigateToCustomerPage();
            session.FindElementByAccessibilityId("nameInput").Clear();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test");
            session.FindElementByAccessibilityId("phoneNumberInput").Clear();
            session.FindElementByAccessibilityId("phoneNumberInput").SendKeys("123456789a");
            session.FindElementByAccessibilityId("saveButton").Click();
            try
            {
                session.FindElementByName("Please enter a valid Customer's phone number!");
            }
            catch (Exception)
            {
                session.FindElementByName("Vui lòng nhập số điện thoại khách hàng hợp lệ!");
            }
            session.FindElementByName("OK").Click();

        }

        [TestMethod]
        public void AddCustomer_DuplicatedPhone_Fail()
        {
            NavigateToCustomerPage();
            var phone = GenerateRandomPhoneNumber();
            session.FindElementByAccessibilityId("nameInput").Clear();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test");
            session.FindElementByAccessibilityId("phoneNumberInput").Clear();
            session.FindElementByAccessibilityId("phoneNumberInput").SendKeys(phone);
            session.FindElementByAccessibilityId("saveButton").Click();
            session.FindElementByName("OK").Click();

            session.FindElementByAccessibilityId("nameInput").Clear();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test");
            session.FindElementByAccessibilityId("phoneNumberInput").Clear();
            session.FindElementByAccessibilityId("phoneNumberInput").SendKeys(phone);
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("Customer already exists");
            }
            catch (Exception)
            {
                session.FindElementByName("Khách hàng đã tồn tại!");
            }

            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void AddCustomer_ValidInput_Success()
        {
            NavigateToCustomerPage();
            var phone = GenerateRandomPhoneNumber();
            session.FindElementByAccessibilityId("nameInput").Clear();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test");
            session.FindElementByAccessibilityId("phoneNumberInput").Clear();
            session.FindElementByAccessibilityId("phoneNumberInput").SendKeys(phone);
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("The customer has been inserted successfully!").Click();
            }
            catch (Exception)
            {
                session.FindElementByName("Khách hàng đã được thêm thành công!").Click();
            }
            
            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCustomer_ValidInput_Success()
        {
            NavigateToCustomerPage();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("The customer has been updated successfully!").Click();
            }
            catch (Exception)
            {
                session.FindElementByName("Khách hàng đã được cập nhật thành công!").Click();
            } 
            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCustomer_EmptyName_Fail()
        {
            NavigateToCustomerPage();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("nameInput").Clear();
            session.FindElementByAccessibilityId("saveButton").Click();
            try
            {
                session.FindElementByName("Name cannot be empty.").Click();
            }
            catch (Exception)
            {
                session.FindElementByName("Tên không thể để trống.").Click();
            }
            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCustomer_EmptyPhone_Fail()
        {
            NavigateToCustomerPage();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("phoneNumberInput").Clear();
            session.FindElementByAccessibilityId("saveButton").Click();
            try
            {
                session.FindElementByName("Phone number is invalid. Please enter a valid phone number.").Click();
            }
            catch (Exception)
            {
                session.FindElementByName("Số điện thoại không hợp lệ. Hãy nhập một số điện thoại hợp lệ.").Click();
            }
            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCustomer_PhoneContainsChar_Fail()
        {
            NavigateToCustomerPage();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("phoneNumberInput").Clear();
            session.FindElementByAccessibilityId("phoneNumberInput").SendKeys("123456789a");
            session.FindElementByAccessibilityId("saveButton").Click();
            try
            {
                session.FindElementByName("Phone number is invalid. Please enter a valid phone number.").Click();
            }
            catch (Exception)
            {
                session.FindElementByName("Số điện thoại không hợp lệ. Hãy nhập một số điện thoại hợp lệ.").Click();
            }
            session.FindElementByName("OK").Click();
        }

        [TestMethod]
        public void EditCustomer_DuplicatedPhone_Fail()
        {
            NavigateToCustomerPage();
            var phone = GenerateRandomPhoneNumber();
            session.FindElementByAccessibilityId("nameInput").Clear();
            session.FindElementByAccessibilityId("nameInput").SendKeys("Test");
            session.FindElementByAccessibilityId("phoneNumberInput").Clear();
            session.FindElementByAccessibilityId("phoneNumberInput").SendKeys(phone);
            session.FindElementByAccessibilityId("saveButton").Click();
            session.FindElementByName("OK").Click();

            NavigateToCustomerPage();
            session.FindElementByAccessibilityId("editButton").Click();
            session.FindElementByAccessibilityId("phoneNumberInput").Clear();
            session.FindElementByAccessibilityId("phoneNumberInput").SendKeys(phone);
            session.FindElementByAccessibilityId("saveButton").Click();

            try
            {
                session.FindElementByName("This phone number is already in use. Please enter a different phone number.").Click();
            }
            catch (Exception)
            {
                session.FindElementByName("Số điện thoại này đã được sử dụng. Hãy nhập một số điện thoại khác.").Click();
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

        public static void NavigateToCustomerPage()
        {

            var navbar = session.FindElementByAccessibilityId("MenuItemsScrollViewer");

            try
            {
                navbar.FindElementByName("Customer").Click();
            }
            catch (Exception)
            {
                navbar.FindElementByName("Khách hàng").Click();
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
