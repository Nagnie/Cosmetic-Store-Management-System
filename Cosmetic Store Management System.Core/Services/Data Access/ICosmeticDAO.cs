using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;


namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public interface ICosmeticDAO
{
    bool AddCosmetic(Cosmetic cosmetic);
    Tuple<List<Cosmetic>, int> GetCosmetics(
        List<int> categoryIDs, 
        List<int> manufacturerIDs, 
        string searchString, 
        string sortString,
        int page, int rowsPerPage
    );

    Cosmetic GetCosmetic(int ID);
    bool UpdateCosmetic(Cosmetic cosmetic);
    bool DeleteCosmetic(int ID);
    Cosmetic GetCosmeticById(int productId);
    Cosmetic GetNextCosmetic(int currentProductId);
    Cosmetic GetPreviousCosmetic(int currentProductId);
    bool UpdateCosmeticQuantity(int ID, int delta);

    int GetOutOfStockCount();
    int GetInStockCount();

    int GetCosmeticCountByCategory(int categoryID);

    int GetCosmeticCountByManufacturer(int manufacturerID);
}
