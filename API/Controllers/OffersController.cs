using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class OffersController : BaseApiController
    {
        
        public OffersController(IMediator mediator) 
                    : base(mediator)
        {

        }
        
        [HttpGet]
        public async Task<ActionResult<List<Domain.Offer>>> GetAllOffers(CancellationToken ctoken)
        {
            return await _mediator.Send(new Application.Offers.List.Query(), ctoken);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Domain.Offer>> GetOffer(Guid id)
        {
            return Ok();
        }
    }
}