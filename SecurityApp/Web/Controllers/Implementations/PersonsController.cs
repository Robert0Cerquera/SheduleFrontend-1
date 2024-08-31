using Business.Security.Interfaces;
using Controller.Controllers.Interfaces;
using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers.Implementations
{
    [ApiController]
    [Route("[controller]")]
    public class PersonsController : ControllerBase, IPersonsControllers
    {
        private readonly IPersonsBusiness _PersonsBusiness;

        public PersonsController(IPersonsBusiness PersonsBusiness)
        {
            _PersonsBusiness = PersonsBusiness;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Person>>> SelectAll()
        {
            var result = await _PersonsBusiness.SelectAll();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PersonsDto>> GetById(int id)
        {
            var result = await _PersonsBusiness.GetById(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("select")]
        public async Task<ActionResult<IEnumerable<DataSelectDto>>> GetAllSelect()
        {
            var result = await _PersonsBusiness.GetAllSelect();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<PersonsDto>> Save([FromBody] PersonsDto entity)
        {
            if (entity == null)
            {
                return BadRequest("Entity is null");
            }
            var result = await _PersonsBusiness.Save(entity);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] PersonsDto entity)
        {
            if (entity == null || id != entity.Id)
            {
                return BadRequest();
            }
            await _PersonsBusiness.Update(id, entity);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _PersonsBusiness.Delete(id);
            return NoContent();
        }

        
    }
}

