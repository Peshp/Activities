using Data;
using Data.Entities;
using MediatR;

namespace Application
{
    public class Delete
    {
        public class Query : IRequest
        {
            public Query(Guid id)
            {
                Id = id;
            }

            public Guid Id { get; set; }
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
                Activity remove = await _context.Activities.FindAsync(request.Id);

                _context.Activities.Remove(remove);

                await _context.SaveChangesAsync();
            }
        }
    }
}
