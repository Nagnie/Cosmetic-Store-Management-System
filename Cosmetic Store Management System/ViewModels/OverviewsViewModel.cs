using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using Cosmetic_Store_Management_System.Contracts.ViewModels;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using Cosmetic_Store_Management_System.Helpers;

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

    public int OutOfStockCount
    {
        get; set;
    }

    public int InStockCount
    {
        get; set;
    }

    public int TodayOrderCount
    {
        get; set;
    }

    public int LastWeekOrderCount
    {
        get; set;
    }

    public OverviewsViewModel()
    {   
        LoadData();
    }
    
    public void LoadData()
    {
        // Get the cosmetics from the database
        ICosmeticDAO dao = new SQLCosmeticDAO();
        var (items, count) = dao.GetCosmetics(
            null, null,
            "", SortString,
            1, 7
        );
        Cosmetics = new ObservableCollection<Cosmetic>(
            items
        );

        // Get the out of stock count
        OutOfStockCount = dao.GetOutOfStockCount();

        // Get the in stock count
        InStockCount = dao.GetInStockCount();

        // Get the today order count
        IOrderDAO orderDAO = new SQLOrderDAO();
        TodayOrderCount = orderDAO.GetTodayOrderCount();

        // Get the last week order count
        LastWeekOrderCount = orderDAO.GetLastWeekOrderCount();
    }


}
