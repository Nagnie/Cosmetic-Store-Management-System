using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.ViewModels;
public class AddManufacturerViewModel
{
    public Manufacturer Manufacturer
    {
        get; set;
    } = new Manufacturer()
    {
        Name= "",
        Origin = ""
    };

    public IManufacturerDAO DAO
    {
        get;
    } = new SQLManufacturerDAO();

    public Tuple<bool, string> AddManufacturer()
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];

        if (Manufacturer.Name.Length == 0)
        {
            return new Tuple<bool, string>(
                false,
                language.Equals("en-US")
                    ? "Please enter manufacturer name"
                    : "Vui lòng nhập tên nhà sản xuất!");
        }

        var founded = DAO.GetManufacturerByName(Manufacturer.Name);

        if (founded != null)
        {
            return new Tuple<bool, string>(
                 false,
                 language.Equals("en-US")
                     ? "Manufacturer name already exists"
                     : "Tên nhà sản xuất đã tồn tại!"
                 );
        }

        DAO.AddManufacturer(Manufacturer);

        return new Tuple<bool, string>(
            true,
            language.Equals("en-US")
                ? "The manufacturer has been inserted successfully!"
                : "Nhà sản xuất đã được lưu thành công!"
        );
    }
}
