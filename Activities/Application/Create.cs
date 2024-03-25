﻿using Data;
using Data.Entities;
using MediatR;

namespace Application
{
    public class Create
    {
        public class Query : IRequest
        {
            public Query(Activity activity)
            {
                Activity = activity;
            }

            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Query>
        {
            private ApplicationDbContext _context;

            public Handler(ApplicationDbContext context)
            {
                _context = context;
            }

            public async Task Handle(Query request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity);

                await _context.SaveChangesAsync();
            }
        }
    }
}
