using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.ViewModels;
public class AddCategoryViewModel
{
    public Category Category
    {
        get; set;
    } = new Category();

    public ICategoryDAO DAO { 
        get; 
    } = new SQLCategoryDAO();

    public Tuple<bool, string> AddCategory()
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];

        if (Category.Name == null || Category.Name.Length == 0)
        {
            return new Tuple<bool, string>(
                false,
                language.Equals("en-US")
                    ? "Please enter manufacturer name"
                    : "Vui lòng nhập tên danh mục!");
        }

        var founded = DAO.GetCategoryByName(Category.Name);

        if (founded != null)
        {
            return new Tuple<bool, string>(
                 false,
                 language.Equals("en-US")
                     ? "Category already exists"
                     : "Tên danh mục đã tồn tại!"
                 );
        }

        DAO.AddCategory(Category);

        return new Tuple<bool, string>(
            true,
            language.Equals("en-US")
                ? "The category has been inserted successfully!"
                : "Danh mục đã được lưu thành công!"
        );
    }
}
