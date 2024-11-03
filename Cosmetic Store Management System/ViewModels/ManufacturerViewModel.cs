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
public class ManufacturerViewModel : ObservableRecipient
{
    public ObservableCollection<Manufacturer> Manufacturers
    {
        get; set;
    } = new ObservableCollection<Manufacturer>();

    public IManufacturerDAO ManufacturerDAO
    {
        get; 
    } = new SQLManufacturerDAO();

    public ManufacturerViewModel()
    {
        LoadData();
    }
    public void LoadData()
    {
        Manufacturers.Clear();
        List<Manufacturer> manufacturers = ManufacturerDAO.GetManufacturers();

        foreach (Manufacturer manufacturer in manufacturers) { 
            Manufacturers.Add(manufacturer);
        }
    }
}
