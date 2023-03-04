using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Offers
{
    public class List
    {
        public class Query : IRequest<List<Offer>>
        {
        
        }

        public class Handler : IRequestHandler<Query, List<Offer>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Offer>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Offers.ToListAsync();
            }
        }
    }
}