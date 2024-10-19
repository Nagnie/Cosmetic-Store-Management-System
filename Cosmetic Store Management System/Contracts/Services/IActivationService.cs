namespace Cosmetic_Store_Management_System.Contracts.Services;

public interface IActivationService
{
    Task ActivateAsync(object activationArgs);
}
