using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Contracts.Services;
public interface ISampleProductDataService
{
    Task<IEnumerable<SampleProduct>> GetListDetailsDataAsync();
}
