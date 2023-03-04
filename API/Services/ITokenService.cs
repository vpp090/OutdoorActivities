
namespace API.Services
{
    public interface ITokenService
    {
       string CreateToken(Domain.User user);
    }
}