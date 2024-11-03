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
    void AddCosmetic(Cosmetic cosmetic);
    List<Cosmetic> GetCosmetics(
        List<int> categoryIDs, 
        List<int> manufacturerIDs, 
        string searchString, 
        string sortString
    );
    Task<Cosmetic> GetCosmetic(int ID);
    void UpdateCosmetic(Cosmetic cosmetic);
    void DeleteCosmetic(int ID);
}
