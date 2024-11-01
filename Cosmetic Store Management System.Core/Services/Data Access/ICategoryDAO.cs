using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public interface ICategoryDAO
{
    List<Category> GetCategories();
    Task<Category> GetCategory(int ID);
    void AddCategory(Category category);
    void UpgradeCategory(Category category);
    void DeleteCategory(int ID);
}
