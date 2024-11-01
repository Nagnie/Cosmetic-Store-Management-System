using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Contracts.ViewModels;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;

namespace Cosmetic_Store_Management_System.ViewModels;

public partial class OverviewsViewModel : ObservableRecipient
{
    public ObservableCollection<Cosmetic> Cosmetics
    {
        get; set;
    } = new ObservableCollection<Cosmetic>();

    public OverviewsViewModel()
    {   
        LoadData();
    }

    public void LoadData()
    {
        ICosmeticDAO dao = new SQLCosmeticDAO();
        Cosmetics = new ObservableCollection<Cosmetic>(dao.GetCosmetics(null, null));
    }
}
