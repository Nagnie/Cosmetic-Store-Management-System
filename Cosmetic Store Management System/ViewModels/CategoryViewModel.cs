using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;

namespace Cosmetic_Store_Management_System.ViewModels;
public class CategoryViewModel : ObservableRecipient
{
    public ObservableCollection<Category> Categories
    {
        get; set;
    } = new ObservableCollection<Category>();

    public ICategoryDAO dao = new SQLCategoryDAO();

    public CategoryViewModel()
    {
        Categories = new ObservableCollection<Category>(dao.GetCategories());
    }

    public void LoadData()
    {
        Categories.Clear();
        foreach (Category category in dao.GetCategories())
        {
            Categories.Add(category);
        }
    }
}
