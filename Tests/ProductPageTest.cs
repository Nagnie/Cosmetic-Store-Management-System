using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Threading.Tasks;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Navigation;
using Cosmetic_Store_Management_System.Views;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using Cosmetic_Store_Management_System.ViewModels;
using System.Reflection;

namespace Tests;

[TestClass]
public class ProductPageTests
{
    private ProductPage _productPage;
    private ProductViewModel _viewModel;
    private Mock<ICosmeticDAO> _mockDao;

    [TestInitialize]
    public void TestInitialize()
    {
        _mockDao = new Mock<ICosmeticDAO>();
        _viewModel = new ProductViewModel();
        _productPage = new ProductPage();
        _viewModel = _productPage.ViewModel;
    }

    [TestMethod]
    public async Task DeleteButton_Click_ShouldCallDeleteCosmeticWithCorrectId_OnSuccess()
    {
        // Arrange
        _viewModel.Cosmetic = new Cosmetic { ID = 123 };
        _mockDao.Setup(d => d.DeleteCosmetic(_viewModel.Cosmetic.ID)).Returns(true);

        // Act
        var deleteMethod = typeof(ProductPage).GetMethod("deleteButton_Click", BindingFlags.NonPublic | BindingFlags.Instance);
        await (Task)deleteMethod.Invoke(_productPage, new object[] { null, null });

        // Assert
        _mockDao.Verify(d => d.DeleteCosmetic(_viewModel.Cosmetic.ID), Times.Once, "DeleteCosmetic should be called exactly once with the correct ID.");
    }

    [TestMethod]
    public async Task DeleteButton_Click_ShouldCallDeleteCosmeticWithCorrectId_OnFailure()
    {
        // Arrange
        _viewModel.Cosmetic = new Cosmetic { ID = 123 };
        _mockDao.Setup(d => d.DeleteCosmetic(_viewModel.Cosmetic.ID)).Returns(false);

        // Act
        var deleteMethod = typeof(ProductPage).GetMethod("deleteButton_Click", BindingFlags.NonPublic | BindingFlags.Instance);
        await (Task)deleteMethod.Invoke(_productPage, new object[] { null, null });

        // Assert
        _mockDao.Verify(d => d.DeleteCosmetic(_viewModel.Cosmetic.ID), Times.Once, "DeleteCosmetic should be called exactly once with the correct ID.");
    }
}