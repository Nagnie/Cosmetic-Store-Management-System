using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Cosmetic_Store_Management_System.Core.Models;
using Cosmetic_Store_Management_System.Core.Services.Data_Access;
using Cosmetic_Store_Management_System.ViewModels;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Controls.Primitives;
using Microsoft.UI.Xaml.Data;
using Microsoft.UI.Xaml.Input;
using Microsoft.UI.Xaml.Media;
using Microsoft.UI.Xaml.Navigation;
using Windows.Storage;
using Windows.Foundation;
using Windows.Foundation.Collections;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace Cosmetic_Store_Management_System.Views;
/// <summary>
/// An empty page that can be used on its own or navigated to within a Frame.
/// </summary>
public sealed partial class CreateOrderPage : Page
{
    public CreateOrderViewModel ViewModel
    {
        get;
    }
    public CreateOrderPage()
    {
        this.InitializeComponent();
        ViewModel = new CreateOrderViewModel();
    }
    private void ProductListUserControl_ItemClick(Core.Models.Cosmetic cosmetic)
    {
        order.AddOrderDetail(cosmetic);
    }

    private void OrderDetailsUserControl_PaymentChanged(int delta)
    {
        payment.UpdatePayment(delta);
    }

    private async void CheckoutButton_Click(object sender, RoutedEventArgs e)
    {
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];
        var dialog = new ContentDialog();

        if (language.Equals("en-US"))
        {
            dialog.Title = "Confirm Payment";
            dialog.Content = "Are you sure you want to proceed with the payment?";
            dialog.SecondaryButtonText = "Yes";
            dialog.PrimaryButtonText = "No";
        }
        else
        {
            dialog.Title = "Xác nhận thanh toán";
            dialog.Content = "Bạn có chắc chắn muốn thực hiện thanh toán không?";
            dialog.SecondaryButtonText = "Có";
            dialog.PrimaryButtonText = "Không";
        }

        dialog.SecondaryButtonStyle = (Style)Application.Current.Resources["AccentButtonStyle"];
        dialog.XamlRoot = this.Content.XamlRoot;
        var result = await dialog.ShowAsync();

        if (result == ContentDialogResult.Secondary)
        {
            CreateOrder();
        }
    }

    private async void CreateOrder()
    {
        // Get order details
        List<OrderDetail> orderDetails = order.GetOrderDetails();
        var language = ApplicationData.Current.LocalSettings.Values["appLanguage"];

        // Check if the cart is empty
        if (orderDetails.Count == 0)
        {
            var dialog = new ContentDialog()
            {
                Content = language.Equals("en-US")
                        ? "Your cart is empty. Please add items to your order before proceeding to checkout."
                        : "Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm vào đơn hàng trước khi thanh toán.",
                CloseButtonText = "Ok",
                XamlRoot = this.Content.XamlRoot,
            };

            await dialog.ShowAsync();
            return;
        }

        // Get customer info
        Customer customer = customerUserControl.GetCustomer();
        string previousLoyalty = customer.Loyal;

        // Get payment info
        var (subtotal, discount, saleTax, total) = payment.GetPaymentInfo();

        // Create order object
        Order newOrder = new Order()
        {
            Customer = customer,
            SubTotal = subtotal,
            Discount = discount,
            SaleTax = saleTax,
            Total = total
        };

        // Save order
        ViewModel.SaveOrder(customer, newOrder, orderDetails);

        // Show success message
        ContentDialog contentDialog = new ContentDialog()
        {
            Title = language.Equals("en-US")
                    ? "Payment Successful"
                    : "Thanh toán thành công",
            Content = language.Equals("en-US")
                    ? "Thank you for your purchasing!"
                    : "Cảm ơn quý khách đã mua hàng tại cửa hàng chúng tôi!",
            CloseButtonText = "Ok",
            XamlRoot = this.Content.XamlRoot
        };

        await contentDialog.ShowAsync();

        // Retrieve updated loyalty level from the database
        Customer updatedCustomer = ViewModel.GetCustomerById(customer.ID); // Replace with your database access method
        if (updatedCustomer != null) // Check if the customer exists in the database
        {
            string updatedLoyalty = updatedCustomer.Loyal;

            // Check if the loyalty level has changed
            if (!previousLoyalty.Equals(updatedLoyalty))
            {
                var loyaltyDialog = new ContentDialog()
                {
                    Title = language.Equals("en-US")
                            ? "Congratulations!"
                            : "Chúc mừng!",
                    Content = language.Equals("en-US")
                            ? $"You have advanced to the {GetLoyaltyLevelName(updatedLoyalty)} level of our loyalty program! Enjoy additional benefits."
                            : $"Bạn đã thăng hạng lên {GetLoyaltyLevelNameInVN(updatedLoyalty)} trong chương trình khách hàng thân thiết của chúng tôi! Hãy tận hưởng các ưu đãi đặc biệt.",
                    CloseButtonText = "Ok",
                    XamlRoot = this.Content.XamlRoot
                };

                await loyaltyDialog.ShowAsync();
            }
        }


            this.Frame.Navigate(typeof(CreateOrderPage));
    }

    private void CustomerInforUserControl_UserFound(int point)
    {
        payment.UpdateDiscountRate(point);
    }

    private string GetLoyaltyLevelName(string loyalty)
    {
        return loyalty switch
        {
            "" => "DIAMOND",
            "" => "GOLD",
            "" => "SILVER",
            "" => "BRONZE",
        };
    }

    private string GetLoyaltyLevelNameInVN(string loyalty)
    {
        return loyalty switch
        {
            "" => "KIM CƯƠNG",
            "" => "VÀNG",
            "" => "BẠC",
            "" => "ĐỒNG",
        };
    }
}
