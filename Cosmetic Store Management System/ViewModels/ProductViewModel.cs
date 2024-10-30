using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;

using CommunityToolkit.Mvvm.ComponentModel;

using Cosmetic_Store_Management_System.Contracts.ViewModels;
using Cosmetic_Store_Management_System.Core.Contracts.Services;
using Cosmetic_Store_Management_System.Core.Models;
using Microsoft.UI.Xaml.Controls.Primitives;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;

namespace Cosmetic_Store_Management_System.ViewModels;

public partial class ProductViewModel : ObservableRecipient
{
    public Cosmetic Cosmetic
    {
        get; set;
    }

    public ProductViewModel()
    {
        
    }
}
