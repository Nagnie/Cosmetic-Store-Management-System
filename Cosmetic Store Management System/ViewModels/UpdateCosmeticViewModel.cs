using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.ViewModels;
public class UpdateCosmeticViewModel
{
    public Cosmetic Cosmetic { get; set; }

    public UpdateCosmeticViewModel()
    {
    }

    public string price;


    public string quantity;
}
