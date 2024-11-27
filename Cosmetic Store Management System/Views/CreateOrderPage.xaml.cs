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

    private void checkoutButton_Click(object sender, RoutedEventArgs e)
    {
        pivot.SelectedIndex = 1;
    }

    private void CheckoutUserControl_CancelButtonClicked()
    {
        pivot.SelectedIndex = 0;
    }

    private async void CheckoutUserControl_FinishButtonClicked()
    {
        Customer customer = customerUserControl.GetCustomer();
        var (subtotal, discount, saleTax, total) = payment.GetPaymentInfo();
        List<OrderDetail> orderDetails = order.GetOrderDetails();

        Order newOrder = new Order()
        {
            Customer = customer,
            SubTotal = subtotal,
            Discount = discount,
            SaleTax = saleTax,
            Total = total
        };

        if (customer.ID != -1)
        {
            customer.Point += (int)(total/1000);
        }

        IOrderDAO orderDAO = new SQLOrderDAO();
        var orderID = orderDAO.AddOrder(newOrder);

        IOrderDetailDAO orderDetailDAO = new SQLOrderDetailDAO();
        orderDetailDAO.AddOrderDetails(orderID, orderDetails);

        ICustomerDAO loyalCustomerDAO = new SQLCustomerDAO();
        loyalCustomerDAO.UpdateCustomer(customer);

        ContentDialog contentDialog = new ContentDialog()
        {
            Content = "Thank you for your purchasing",
            CloseButtonText = "Ok",
            XamlRoot = this.Content.XamlRoot
        };

        await contentDialog.ShowAsync();
        this.Frame.Navigate(typeof(CreateOrderPage));
    }
}
