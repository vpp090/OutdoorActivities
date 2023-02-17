using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OffersController : ControllerBase
    {
        private DataContext _dataContext {get; set;}
        public OffersController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        [HttpGet]
        public async Task<ActionResult<List<Domain.Offer>>> GetAllOffers()
        {
            return await _dataContext.Offers.Include(o => o.User).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Domain.Offer>> GetOffer(Guid id)
        {
            return await _dataContext.Offers.FindAsync(id);
        }
    }
}