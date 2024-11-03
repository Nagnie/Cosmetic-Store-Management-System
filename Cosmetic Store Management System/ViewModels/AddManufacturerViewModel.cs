using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;

namespace Cosmetic_Store_Management_System.ViewModels;
public class AddManufacturerViewModel
{
    public Manufacturer Manufacturer
    {
        get; set;
    } = new Manufacturer()
    {
        Name= "",
        Description = ""
    };

    public IManufacturerDAO DAO
    {
        get;
    } = new SQLManufacturerDAO();

    public void AddManufacturer()
    {
        DAO.AddManufacturer(Manufacturer);
    }
}
