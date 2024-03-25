using Data;
using Data.Entities;
using MediatR;

namespace Application
{
    public class Edit
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
                Activity change = await _context.Activities.FindAsync(request.Activity.Id);

                await Mapper(request, change);

                await _context.SaveChangesAsync();
            }

            private async Task Mapper(Query request, Activity change)
            {
                change.Name = request.Activity.Name;
                change.City = request.Activity.City;
                change.Description = request.Activity.Description;
                change.Category = request.Activity.Category;
                change.Date = request.Activity.Date;
                change.Venue = request.Activity.Venue;
            }
        }
    }
}
