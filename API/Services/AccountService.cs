using API.DTOs;
using Application.Common;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<User> _userManager;
        private readonly ITokenService _tokenService;
        public AccountService(UserManager<Domain.User> userManager, ITokenService tokenService) 
        {
            _userManager = userManager;
            _tokenService = tokenService;
        }

        public async Task<ServiceResponse<UserDto>> GetCurrentUser(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            var response = new ServiceResponse<UserDto>
            {
                Data = CreateUserDto(user),
                HttpCode = System.Net.HttpStatusCode.OK
            };

            return response;
        }

        public async Task<ServiceResponse<UserDto>>  Login(LoginDto loginDto)
        {
            User user = null;

            if(!string.IsNullOrEmpty(loginDto.Email))
                user = await _userManager.FindByEmailAsync(loginDto.Email);
            else if(!string.IsNullOrEmpty(loginDto.Username))
                user = await _userManager.FindByNameAsync(loginDto.Username);

            if(user == null) return new ServiceResponse<UserDto>{ Data = null, ErrorMessage = "No suchh username or password", HttpCode = System.Net.HttpStatusCode.BadRequest};

            var result = await _userManager.CheckPasswordAsync(user, loginDto.Password);

            if(result)
            {
                return new ServiceResponse<UserDto>
                {
                    Data = CreateUserDto(user),
                    ErrorMessage = null,
                    HttpCode = System.Net.HttpStatusCode.OK
                };
            }

            return new ServiceResponse<UserDto> { Data = null, ErrorMessage = "Error loging in", HttpCode = System.Net.HttpStatusCode.BadRequest};
        }

        public async Task<ServiceResponse<UserDto>> Register(RegisterDto registerDto)
        {
            if(await _userManager.Users.AnyAsync(x => x.UserName == registerDto.Username))
                return new ServiceResponse<UserDto>
                    { Data = null, ErrorMessage = ErrorMessages.UserNameTaken, HttpCode = System.Net.HttpStatusCode.BadRequest};
            
            if(await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
                return new ServiceResponse<UserDto>
                { Data = null, ErrorMessage = ErrorMessages.EmailAlreadyTaken, HttpCode = System.Net.HttpStatusCode.Conflict};

            var user = new Domain.User
            {
                UserName = registerDto.Username,
                Email = registerDto.Email,
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if(result.Succeeded)
            {
                return new ServiceResponse<UserDto>
                {
                   Data = CreateUserDto(user),
                   ErrorMessage = null,
                   HttpCode = System.Net.HttpStatusCode.OK
                };
            }

            return new ServiceResponse<UserDto>
            {
                Data = null,
                ErrorMessage = result.Errors.ToArray()[0].Description,
                HttpCode = System.Net.HttpStatusCode.BadRequest
            };
        }

        private UserDto CreateUserDto(User user)
        {
            return new UserDto
            {
                Token = _tokenService.CreateToken(user),
                Username = user.UserName,
                Image = null
            };
        }
    }
}