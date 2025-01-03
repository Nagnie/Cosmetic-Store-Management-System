using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using Windows.Storage;

namespace Cosmetic_Store_Management_System.ViewModels;
public class UpdateManufacturerViewModel
{
    public Manufacturer Manufacturer
    {
        get; set;
    } = new Manufacturer();

    public IManufacturerDAO DAO
    {
        get;
    } = new SQLManufacturerDAO();

    public Tuple<bool, string, string> UpdateManufacturer()
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        
        if (Manufacturer.Name.Length == 0)
        {
            if (language.Equals("en-US"))
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Error",
                    "Please enter the manufacturer name!"
                );
            }
            else
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Lỗi",
                    "Vui lòng nhập tên thương hiệu!"
                );
            }
        }

        if (Manufacturer.Origin.Length == 0)
        {
            if (language.Equals("en-US"))
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Error",
                    "Please enter the manufacturer origin!"
                );
            }
            else
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Lỗi",
                    "Vui lòng nhập nơi xuất xứ!"
                );
            }
        }

        var existed = DAO.GetManufacturerByName(Manufacturer.Name);
        if (existed != null && existed.ID != Manufacturer.ID)
        {
            if (language.Equals("en-US"))
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Error",
                    "The manufacturer name has already existed!"
                );
            }
            else
            {
                return new Tuple<bool, string, string>(
                    false,
                    "Lỗi",
                    "Thương hiệu đã tồn tại!"
                );
            }
        }

        DAO.UpdateManufacturer(Manufacturer);
        if (language.Equals("en-US"))
        {
            return new Tuple<bool, string, string>(
                true,
                "Success",
                "Update manufacturer successfully!"
            );
        }
        else
        {
            return new Tuple<bool, string, string>(
                true,
                "Thành công",
                "Cập nhật thương hiệu thành công!"
            );
        }
    }
}
