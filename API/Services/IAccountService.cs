using API.DTOs;

namespace API.Services
{
    public interface IAccountService 
    {
        Task<ServiceResponse<UserDto>> Login(LoginDto loginDto);
        Task<ServiceResponse<UserDto>> Register(RegisterDto registerDto);
        
    }
}