
namespace Persistence
{
    public class Seeder
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Users.Any()) return;
            
            var addresses = new List<Domain.Address>
            {
                new Domain.Address
                {
                    Country = "Bulgaria",
                    City = "Sofia",
                    Street = "Bla bla",
                    StreetNumber = 32
                },
                new Domain.Address
                {
                    Country = "USA",
                    City = "City Mity",
                    Street = "Balo balo",
                    StreetNumber = 31
                },
                new Domain.Address
                {
                    Country = "Bulgaria",
                    City = "Sofia",
                    Street = "Kalbi kalbi",
                    StreetNumber = 39
                }
            };

            var profiles = new List<Domain.Profile>
            {
                new Domain.Profile
                {
                    FirstName = "Vako",
                    LastName = "Mako",
                    Email = "vm@test.com",
                    Address = addresses[0]
                },
                new Domain.Profile
                {
                    FirstName = "Lampi",
                    LastName = "Dampi",
                    Email = "ld@test.com",
                    Address = addresses[1]
                },
                new Domain.Profile
                {
                    FirstName = "Pompa",
                    LastName= "Shompa",
                    Email = "ps@test.com",
                    Address = addresses[2]
                }
            };

            var users = new List<Domain.User>
            {
                new Domain.User
                {
                    Username = "User1",
                    Password = "Password1",
                    DateCreated = DateTime.Now,
                    Profile = profiles[0]
                },
                new Domain.User
                {
                    Username = "User2",
                    Password = "Password2",
                    DateCreated = DateTime.Now,
                    Profile = profiles[1]
                },
                new Domain.User
                {
                    Username = "User3",
                    Password = "Password3",
                    DateCreated = DateTime.Now,
                    Profile = profiles[2]
                }
            };

            var offers = new List<Domain.Offer>
            {
                new Domain.Offer
                {
                    Title = "Offer 1",
                    DateCreated = DateTime.Now,
                    User = users[0],
                    Description = "Bla bla bla bla"      
                },
                new Domain.Offer
                {
                    Title = "Offer 2",
                    DateCreated = DateTime.Now,
                    User = users[1],
                    Description = "Bla bla bla bla"
                },
                new Domain.Offer
                {
                    Title = "Offer 3",
                    DateCreated = DateTime.Now,
                    User = users[2],
                    Description = "Bla bla bla bla"
                }
            };

            await context.Addresses.AddRangeAsync(addresses);
            await context.Profiles.AddRangeAsync(profiles);
            await context.Users.AddRangeAsync(users);
            await context.Offers.AddRangeAsync(offers);

            await context.SaveChangesAsync();
        }
    }
}