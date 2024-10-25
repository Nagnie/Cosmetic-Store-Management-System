using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Cosmetic_Store_Management_System.Core.Contracts.Services;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Services;
public class SampleProductDataService : ISampleProductDataService
{
    private List<SampleProduct> _allProducts;

    public SampleProductDataService()
    {
    }

    private static IEnumerable<SampleProduct> AllProducts()
    {
        return new List<SampleProduct>()
        {
            new SampleProduct()
            {
                ProductID = "001",
                ProductName = "Son kem Romand",
                StockStatus = "In stock",
                Price = 200000,
                Description = "Son kem Romand",
                Quantity = 10,
                Category = "Son",
                Manufacturer = "Romand",
                ImagePath = "Assets/image01.jpg"
            },
            new SampleProduct()
            {
                ProductID = "002",
                ProductName = "Son tint Romand",
                StockStatus = "In stock",
                Price = 200000,
                Description = "Son tint Romand",
                Quantity = 10,
                Category = "Son",
                Manufacturer = "Romand",
                ImagePath = "Assets/image01.jpg"
            },
            new SampleProduct()
            {
                ProductID = "003",
                ProductName = "Kem nen Romand",
                StockStatus = "In stock",
                Price = 300000
            },
            new SampleProduct()
            {
                ProductID = "004",
                ProductName = "Phan ma Romand",
                StockStatus = "In stock",
                Price = 180000
            },
            new SampleProduct()
            {
                ProductID = "005",
                ProductName = "Phan phu Romand",
                StockStatus = "In stock",
                Price = 300000
            },
            new SampleProduct()
            {
                ProductID = "006",
                ProductName = "Son kem 3ce",
                StockStatus = "Out of stock",
                Price = 180000
            },
            new SampleProduct()
            {
                ProductID = "007",
                ProductName = "Phan mat 3ce",
                StockStatus = "In stock",
                Price = 300000
            },
            new SampleProduct()
            {
                ProductID = "004",
                ProductName = "Phan ma Romand",
                StockStatus = "In stock",
                Price = 180000
            },
            new SampleProduct()
            {
                ProductID = "005",
                ProductName = "Phan phu Romand",
                StockStatus = "In stock",
                Price = 300000
            },
            new SampleProduct()
            {
                ProductID = "006",
                ProductName = "Son kem 3ce",
                StockStatus = "Out of stock",
                Price = 180000
            },
            new SampleProduct()
            {
                ProductID = "007",
                ProductName = "Phan mat 3ce",
                StockStatus = "In stock",
                Price = 300000
            },
            new SampleProduct()
            {
                ProductID = "004",
                ProductName = "Phan ma Romand",
                StockStatus = "In stock",
                Price = 180000
            },
            new SampleProduct()
            {
                ProductID = "005",
                ProductName = "Phan phu Romand",
                StockStatus = "In stock",
                Price = 300000
            },
            new SampleProduct()
            {
                ProductID = "006",
                ProductName = "Son kem 3ce",
                StockStatus = "Out of stock",
                Price = 180000
            },
            new SampleProduct()
            {
                ProductID = "007",
                ProductName = "Phan mat 3ce",
                StockStatus = "In stock",
                Price = 300000
            },
            new SampleProduct()
            {
                ProductID = "004",
                ProductName = "Phan ma Romand",
                StockStatus = "In stock",
                Price = 180000
            },
            new SampleProduct()
            {
                ProductID = "005",
                ProductName = "Phan phu Romand",
                StockStatus = "In stock",
                Price = 300000
            },
            new SampleProduct()
            {
                ProductID = "006",
                ProductName = "Son kem 3ce",
                StockStatus = "Out of stock",
                Price = 180000
            },
            new SampleProduct()
            {
                ProductID = "007",
                ProductName = "Phan mat 3ce",
                StockStatus = "In stock",
                Price = 300000
            },
            new SampleProduct()
            {
                ProductID = "004",
                ProductName = "Phan ma Romand",
                StockStatus = "In stock",
                Price = 180000
            },
            new SampleProduct()
            {
                ProductID = "005",
                ProductName = "Phan phu Romand",
                StockStatus = "In stock",
                Price = 300000
            },
            new SampleProduct()
            {
                ProductID = "006",
                ProductName = "Son kem 3ce",
                StockStatus = "Out of stock",
                Price = 180000
            },
            new SampleProduct()
            {
                ProductID = "007",
                ProductName = "Phan mat 3ce",
                StockStatus = "In stock",
                Price = 300000
            },
        };
    
    }

    public async Task<IEnumerable<SampleProduct>> GetListDetailsDataAsync()
    {
        _allProducts ??= new List<SampleProduct>(AllProducts());

        await Task.CompletedTask;
        return _allProducts;
    }


}
