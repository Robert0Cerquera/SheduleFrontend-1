
using Business.Security.Interfaces;
using Controller.Controllers.Interfaces;
using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers.Implementations
{
    [ApiController]
    [Route("[controller]")]
    public class ViewsControllers : ControllerBase, IViewsControllers
    {
        private readonly IViewsBusiness _ViewsBusiness;

        public ViewsControllers(IViewsBusiness ViewsBusiness)
        {
            _ViewsBusiness = ViewsBusiness;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<View>>> SelectAll()
        {
            var result = await _ViewsBusiness.SelectAll();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ViewsDto>> GetById(int id)
        {
            var result = await _ViewsBusiness.GetById(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("select")]
        public async Task<ActionResult<IEnumerable<DataSelectDto>>> GetAllSelect()
        {
            var result = await _ViewsBusiness.GetAllSelect();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<ViewsDto>> Save([FromBody] ViewsDto entity)
        {
            if (entity == null)
            {
                return BadRequest("Entity is null");
            }
            var result = await _ViewsBusiness.Save(entity);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] ViewsDto entity)
        {
            if (entity == null || id != entity.Id)
            {
                return BadRequest();
            }
            await _ViewsBusiness.Update(id, entity);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _ViewsBusiness.Delete(id);
            return NoContent();
        }

        /*
        [HttpGet("Nombre/{nombre}")]
        public async Task<ActionResult<ViewsDto>> GetByNombre(string nombre)
        {
            var result = await _ViewsBusiness.GetByNombre(nombre);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }
        */
    }
}