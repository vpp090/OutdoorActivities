using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using API.DTOs;
using API.Services;

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
        

        [HttpPost("login")]
        public async Task<ActionResult<ServiceResponse<UserDto>>> Login(LoginDto loginDto)
        {
            var response = await _accountService.Login(loginDto);

            if(response == null)
                return Unauthorized();

            return response;
        }

        [HttpPost("register")]
        public async Task<ActionResult<ServiceResponse<UserDto>>> Register(RegisterDto registerDto)
        {
            var response = await _accountService.Register(registerDto);

            if(response.HttpCode != System.Net.HttpStatusCode.OK)
                return BadRequest(response);

            return response;
        }
    }
}