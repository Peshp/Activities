using Data;
using Data.Entities;
using MediatR;

namespace Application
{
    public class Create
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
                _context.Activities.Add(request.Activity);

                await _context.SaveChangesAsync();
            }
        }
    }
}
