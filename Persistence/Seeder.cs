
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seeder
    {
        public static async Task SeedData(DataContext context, UserManager<Domain.User> userManager)
        {
            if(!userManager.Users.Any())
            {
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

                };

                var profiles = new List<Domain.Profile>
                {
                    new Domain.Profile{FirstName = "Papo", LastName = "Shapo", Address = addresses[0]},
                    new Domain.Profile{FirstName = "Kembo", LastName= "Lemov", Address = addresses[1]}
                };

                var users = new List<Domain.User>
                {
                    new Domain.User{UserName = "user1", Email = "user1@test.com", Profile = profiles[0] },
                    new Domain.User{UserName = "user2", Email = "user2@test.com", Profile = profiles[1]}
                };

                 await context.Addresses.AddRangeAsync(addresses);
                 await context.Profiles.AddRangeAsync(profiles);
                 await context.SaveChangesAsync();
                 
                foreach(var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$word10");
                }

            }

            if(context.Offers.Any()) return;
            
           
            var offers = new List<Domain.Offer>
            {
                new Domain.Offer
                {
                    Title = "Offer 1",
                    DateCreated = DateTime.Now,
                   
                    Description = "Bla bla bla bla"      
                },
                new Domain.Offer
                {
                    Title = "Offer 2",
                    DateCreated = DateTime.Now,
                   
                    Description = "Bla bla bla bla"
                },
                new Domain.Offer
                {
                    Title = "Offer 3",
                    DateCreated = DateTime.Now,
                    
                    Description = "Bla bla bla bla"
                }
            };

           
            await context.Offers.AddRangeAsync(offers);

           
        }
    }
}