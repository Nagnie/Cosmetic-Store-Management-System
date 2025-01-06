using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.ViewModels;
public class AddCosmeticViewModel : ObservableRecipient
{
    public ObservableCollection<Category> Categories
    {
        get; set;
    }

    public ObservableCollection<Manufacturer> Manufacturers
    {
        get; set;
    }

    public Cosmetic Cosmetic
    {
        get; set;
    } = new Cosmetic();

    public Manufacturer Manufacturer
    {
        get; set;
    } = new Manufacturer();

    public Category Category
    {
        get; set;
    } = new Category();

    public ICosmeticDAO CosmeticDAO {
        get; 
    } = new SQLCosmeticDAO();

    public IManufacturerDAO ManufacturerDAO
    {
        get;
    } = new SQLManufacturerDAO();

    public ICategoryDAO CategoryDAO
    {
        get;
    } = new SQLCategoryDAO();

    public AddCosmeticViewModel()
    {
        Categories = new ObservableCollection<Category>(CategoryDAO.GetAllCategories());
        Manufacturers = new ObservableCollection<Manufacturer>(ManufacturerDAO.GetAllManufacturers());
    }
    public Tuple<bool, string> AddCosmetic()
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        Cosmetic.Manufacturer = Manufacturer;
        Cosmetic.Category = Category;

        var  founded = CosmeticDAO.GetCosmeticByName(Cosmetic.Name);

        if (founded != null)
        {
            return new Tuple<bool, string>(
                 false,
                 language.Equals("en-US")
                     ? "The product has already existed!"
                     : "Sản phẩm đã tồn tại!"
                 );
        }

        bool success = CosmeticDAO.AddCosmetic(Cosmetic);
        return new Tuple<bool, string>(
            true,
            language.Equals("en-US")
                ? "The product has been inserted successfully!"
                : "Sản phẩm đã được thêm thành công!"
        );
    }

    public string price;

    public string quantity;
}
