using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Contracts.ViewModels;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using System.Linq;
using System.ComponentModel;
using Microsoft.UI.Xaml.Media.Imaging;

namespace Cosmetic_Store_Management_System.ViewModels;

public partial class OverviewsViewModel : ObservableRecipient
{
    public ObservableCollection<Cosmetic> Cosmetics
    {
        get; set;
    } = new ObservableCollection<Cosmetic>();

    public string SortString
    {
        get;
        set;
    } = "cosmetic_id ASC";

    public OverviewsViewModel()
    {
        LoadData();
    }

    public void LoadData()
    {
        ICosmeticDAO dao = new SQLCosmeticDAO();
        var (items, count) = dao.GetCosmetics(
            null, null,
            "", SortString,
            1, 7
        );
        Cosmetics = new ObservableCollection<Cosmetic>(items);

        // Update low-stock count and products
        UpdateLowStock();
    }

    private int lowStockCount;
    public int LowStockCount
    {
        get => lowStockCount;
        set => SetProperty(ref lowStockCount, value); // Notify UI of changes
    }

    private ObservableCollection<Cosmetic> lowStockProducts;
    public ObservableCollection<Cosmetic> LowStockProducts
    {
        get => lowStockProducts;
        set => SetProperty(ref lowStockProducts, value); // Notify UI of changes
    }

    public void UpdateLowStock()
    {
        ICosmeticDAO dao = new SQLCosmeticDAO();
        var (items, count) = dao.GetCosmetics(
            null, null,
            "", SortString,
            1, 0
        );

        
        LowStockProducts = new ObservableCollection<Cosmetic>(
            items.Where(c => c.Quantity <= 10)
        );

        LowStockCount = LowStockProducts.Count;
    }

   
}
