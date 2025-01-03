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
public partial class CategoryViewModel : ObservableRecipient
{

    public ObservableCollection<Category> Categories
    {
        get; set;
    } = new ObservableCollection<Category>();

    public ICategoryDAO dao
    {
        get;
    } = new SQLCategoryDAO();

    public string Info
    {
        get
        {
            var localSettings = ApplicationData.Current.LocalSettings;
            if (localSettings.Values["appLanguage"].Equals("vi-VN"))
            {
                return $"Hiển thị {Categories.Count}/{RowsPerPage} trong tổng số {TotalItems} danh mục";
            }
            return $"Displaying {Categories.Count}/{RowsPerPage} of total {TotalItems} item(s)";
        }
    }

    public ObservableCollection<PageInfo> PageInfos { get; set; } = new ObservableCollection<PageInfo>();

    private PageInfo _selectedPageInfoItem;
    public PageInfo SelectedPageInfoItem
    {
        get => _selectedPageInfoItem;
        set
        {
            _selectedPageInfoItem = value;
            OnPropertyChanged(nameof(SelectedPageInfoItem));
        }
    }

    public int CurrentPage
    {
        get; set;
    }
    public int TotalPages
    {
        get; set;
    }
    public int TotalItems { get; set; } = 0;
    public int RowsPerPage
    {
        get; set;
    }

    public void GoToNextPage()
    {
        if (CurrentPage < TotalPages)
        {
            CurrentPage++;
            LoadData();
        }
    }

    public void GoToPreviousPage()
    {
        if (CurrentPage > 1)
        {
            CurrentPage--;
            LoadData();
        }
    }

    public void GoToPage(int page)
    {
        CurrentPage = page;
        LoadData();
    }
    public CategoryViewModel()
    {
        RowsPerPage = 12;
        CurrentPage = 1;

        LoadData();
    }
    public int categoryCount
    {
        get; set;
    }

    public void LoadData()
    {
        ICategoryDAO categoryDAO = new SQLCategoryDAO();
        Categories.Clear();
        var (items, count) = categoryDAO.GetCategories(
            CurrentPage, RowsPerPage
        );
        foreach (var item in items) // Add new items
        {
            Categories.Add(item);
        }

        if (count != TotalItems)
        { // Recreate PageInfos list
            TotalItems = count;
            TotalPages = (TotalItems / RowsPerPage) +
                (((TotalItems % RowsPerPage) == 0) ? 0 : 1);

            PageInfos.Clear();
            for (var i = 1; i <= TotalPages; i++)
            {
                PageInfos.Add(new PageInfo
                {
                    Page = i,
                    Total = TotalPages
                });
            }
        }
        categoryCount = categoryDAO.GetCategoryCount();
        SelectedPageInfoItem = PageInfos.FirstOrDefault(p => p.Page == CurrentPage);

        OnPropertyChanged(nameof(Info));
    }

    public Tuple<bool, string, string> AddCategory(string category)
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];

        if (category == null || category.Length == 0)
        {
            if (language.Equals("en-US"))
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Error",
                    "Please enter category name"
                );
            }

            return new Tuple<bool, string, string>(
                false,
                "Lỗi",
                "Vui lòng nhập tên danh mục"
            );
        }

        var founded = dao.GetCategoryByName(category);

        if (founded != null)
        {
            if (language.Equals("en-US"))
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Error",
                    "The category already exists"
                );
            }
            else
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Lỗi",
                    "Danh mục đã tồn tại"
                );
            }
        }

        dao.AddCategory(new Category()
        {
            Name = category
        });

        if (language.Equals("en-US"))
        {
            return new Tuple<bool, string, string>(
                true,
                "Success",
                "Category added successfully"
            );
        }

        return new Tuple<bool, string, string>(
            true,
            "Thành công",
            "Danh mục đã được thêm thành công"
        );
    }

    public Tuple<bool, string, string> DeleteCategory(int ID)
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        ICosmeticDAO cosmeticDAO = new SQLCosmeticDAO();
        var count = cosmeticDAO.GetCosmeticCountByCategory(ID);
        if (count > 0)
        {
            if (language.Equals("en-US"))
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Error",
                    "This category cannot be deleted"
                );
            }
            else
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Lỗi",
                    "Không thể xóa danh mục này"
                );
            }
        }

        dao.DeleteCategory(ID);
        LoadData();

        if (language.Equals("en-US"))
        {
            return new Tuple<bool, string, string>(
                true,
                "Success",
                "Category deleted successfully"
            );
        }

        return new Tuple<bool, string, string>(
            true,
            "Thành công",
            "Danh mục đã được xóa thành công"
        );
    }
}
