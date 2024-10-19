using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Contracts.Services;

// Remove this class once your pages/features are using your data.
public interface ISampleDataService
{
    Task<IEnumerable<SampleOrder>> GetListDetailsDataAsync();
}
