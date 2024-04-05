using Application;
using Data;
using Data.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ActivityController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Activity>>> All()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetById(Guid id)
        {
            return await Mediator.Send(new Details.Query(id));
        }

        [HttpPost]
        public async Task<ActionResult> Add(Activity activity)
        {
            await Mediator.Send(new Create.Command(activity));

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Edit(Activity activity, Guid id)
        {
            activity.Id = id;

            await Mediator.Send(new Edit.Command(activity));

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Remove(Guid id)
        {
            await Mediator.Send(new Delete.Query(id));

            return Ok();
        }
    }
}
