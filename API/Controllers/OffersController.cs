using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class OffersController : BaseApiController
    {
        private readonly IMediator _mediator;
        public OffersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Domain.Offer>>> GetAllOffers()
        {
            return await _mediator.Send(new Application.Offers.List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Domain.Offer>> GetOffer(Guid id)
        {
            return Ok();
        }
    }
}