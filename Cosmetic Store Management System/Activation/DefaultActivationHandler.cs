using Cosmetic_Store_Management_System.Contracts.Services;
using Cosmetic_Store_Management_System.ViewModels;

using Microsoft.UI.Xaml;

namespace Cosmetic_Store_Management_System.Activation;

public class DefaultActivationHandler : ActivationHandler<LaunchActivatedEventArgs>
{
    private readonly INavigationService _navigationService;

    public DefaultActivationHandler(INavigationService navigationService)
    {
        _navigationService = navigationService;
    }

    protected override bool CanHandleInternal(LaunchActivatedEventArgs args)
    {
        // None of the ActivationHandlers has handled the activation.
        return _navigationService.Frame?.Content == null;
    }

    protected async override Task HandleInternalAsync(LaunchActivatedEventArgs args)
    {
        _navigationService.NavigateTo(typeof(OverviewsViewModel).FullName!, args.Arguments);

        await Task.CompletedTask;
    }
}
