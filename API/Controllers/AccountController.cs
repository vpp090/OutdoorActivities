using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using API.DTOs;
using API.Services;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }
        

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<ServiceResponse<UserDto>>> Login(LoginDto loginDto)
        {
            var response = await _accountService.Login(loginDto);

            if(response == null)
                return Unauthorized();

            return response;
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<ServiceResponse<UserDto>>> Register(RegisterDto registerDto)
        {
            var response = await _accountService.Register(registerDto);

            if(response.HttpCode != System.Net.HttpStatusCode.OK)
                return BadRequest(response);

            return response;
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<ServiceResponse<UserDto>>> GetCurrentUser()
        {
            return await _accountService.GetCurrentUser(User.FindFirstValue(ClaimTypes.Email));
        }
    }
}