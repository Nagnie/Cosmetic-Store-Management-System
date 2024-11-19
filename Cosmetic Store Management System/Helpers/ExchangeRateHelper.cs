using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;
using System.Diagnostics;

namespace Cosmetic_Store_Management_System.Helpers;

public class ExchangeRateHelper
{
    private static readonly HttpClient client = new();

    public static async Task<float> GetExchangeRate(string fromCurrency, string toCurrency)
    {
        var url = $"https://apilayer.net/api/live?access_key=f619ab306099924fedfa4bb05f5feab1&currencies={toCurrency}&source={fromCurrency}&format=1";
        HttpResponseMessage response = await client.GetAsync(url);
        response.EnsureSuccessStatusCode();
        var responseBody = await response.Content.ReadAsStringAsync();
        Debug.WriteLine(responseBody);
        using var doc = JsonDocument.Parse(responseBody);
        var root = doc.RootElement;

        if (root.GetProperty("success").GetBoolean())
        {
            var key = $"{fromCurrency}{toCurrency}";
            var quotes = root.GetProperty("quotes");

            if (quotes.TryGetProperty(key, out var rateElement))
            {
                return (float)rateElement.GetDecimal();
            }
            else
            {
                throw new ArgumentException("Currency pair not found in the response");
            }
        }
        else
        {
            throw new Exception("Failed to retrieve exchange rate");
        }
    }
}