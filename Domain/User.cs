using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class User : IdentityUser
    {
        public Profile Profile { get; set; }
        public DateTime DateCreated { get; set; }
    }
}