using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Services.Data_Access;
public interface IManufacturerDAO
{
    public List<Manufacturer> GetAllManufacturers();
    Tuple<List<Manufacturer>, int> GetManufacturers(int page, int rowsPerPage);
    Manufacturer GetManufacturer(int id);
    void AddManufacturer(Manufacturer manufacturer);
    void UpdateManufacturer(Manufacturer manufacturer);
    void DeleteManufacturer(int id);
    public Manufacturer GetManufacturerByName(string name);
    public int GetManufacturerCount();
}
