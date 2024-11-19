using Microsoft.VisualStudio.TestTools.UnitTesting;
using Cosmetic_Store_Management_System.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tests;

[TestClass()]
public class LanguageConverterTests
{
    [TestMethod()]
    public async void ConvertTest()
    {
        Console.WriteLine(await LanguageConverter.Translate("Hello", "en", "vi"));
    }
}