using Data;
using Data.Entities;
using MediatR;

namespace Application
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Command(Activity activity)
            {
                Activity = activity;
            }

            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly ApplicationDbContext _context;

            public Handler(ApplicationDbContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);

                if (activity != null)
                {
                    activity.Name = request.Activity.Name;
                    activity.City = request.Activity.City;
                    activity.Description = request.Activity.Description;
                    activity.Category = request.Activity.Category;
                    activity.Date = request.Activity.Date;
                    activity.Venue = request.Activity.Venue;
                }

                await _context.SaveChangesAsync();
            }
        }
    }
}
