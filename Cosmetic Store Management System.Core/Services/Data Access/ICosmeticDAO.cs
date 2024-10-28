using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public interface ICosmeticDAO
{
    void AddCosmetic(Cosmetic cosmetic);
    Task<List<Cosmetic>> GetCosmetics();
    Task<Cosmetic> GetCosmetic(int ID);
    void UpdateCosmetic(Cosmetic cosmetic);
    void DeleteCosmetic(int ID);
}
