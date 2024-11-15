using Microsoft.VisualStudio.TestTools.UnitTesting;
using Cosmetic_Store_Management_System.Helpers;
using System;
using System.Threading.Tasks;
using System.Globalization;

namespace Tests
{
    [TestClass()]
    public class CurrencyConverterTests
    {
        [TestMethod()]
        public void ConvertCurrencyTest()
        {
            // Arrange
            var converter = new CurrencyConverter();
            var price = 1000;
            var targetType = typeof(string);
            var language = "vi-VN";
            var expected = string.Format(new CultureInfo("vi-VN"), "{0:C0}", price);

            // Act
            var result = converter.Convert(price, targetType, null, language);

            // Assert
            Assert.AreEqual(expected, result);
        }

        [TestMethod()]
        [ExpectedException(typeof(NotImplementedException))]
        public void ConvertBackCurrencyTest()
        {
            // Arrange
            var converter = new CurrencyConverter();
            var value = "1.000 ₫";
            var targetType = typeof(int);
            var language = "vi-VN";

            // Act
            converter.ConvertBack(value, targetType, null, language);
        }
    }
}
