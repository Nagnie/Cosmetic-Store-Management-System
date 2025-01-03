using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.ViewModels;
public class EditCategoryViewModel
{
    public Category Category
    {
        get; set;
    } = new Category();

    public ICategoryDAO dao
    {
        get;
    } = new SQLCategoryDAO();

    public Tuple<bool, string, string> UpdateCategory()
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];

        if (Category.Name.Length == 0)
        {
            if (language.Equals("en-US"))
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Error",
                    "Please enter the category name!"
                );
            }
            else
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Lỗi",
                    "Vui lòng nhập tên danh mục!"
                );
            }
        }

        var existed = dao.GetCategoryByName(Category.Name);
        if (existed != null && existed.ID != Category.ID)
        {
            if (language.Equals("en-US"))
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Error",
                    "The category name has already existed!"
                );
            }
            else
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Lỗi",
                    "Danh mục đã tồn tại!"
                );
            }
        }

        dao.UpdateCategory(Category);

        if (language.Equals("en-US"))
        {
            return new Tuple<bool, string, string>(
                true,
                "Success",
                "Update category successfully!"
            );
        }
        else
        {
            return new Tuple<bool, string, string>(
                true,
                "Thành công",
                "Cập nhật danh mục thành công!"
            );
        }
    }
}
