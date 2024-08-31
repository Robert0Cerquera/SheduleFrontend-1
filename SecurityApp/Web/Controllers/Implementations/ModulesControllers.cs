using Business.Security.Interfaces;
using Controller.Controllers.Interfaces;
using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers.Implementations
{
    [ApiController]
    [Route("[controller]")]
    public class ModulesControllers : ControllerBase, IModulesControllers
    {
        private readonly IModulesBusiness _ModulesBusiness;

        public ModulesControllers(IModulesBusiness ModulesBusiness)
        {
            _ModulesBusiness = ModulesBusiness;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Modules>>> SelectAll()
        {
            var result = await _ModulesBusiness.SelectAll();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ModulesDto>> GetById(int id)
        {
            var result = await _ModulesBusiness.GetById(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("select")]
        public async Task<ActionResult<IEnumerable<DataSelectDto>>> GetAllSelect()
        {
            var result = await _ModulesBusiness.GetAllSelect();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<ModulesDto>> Save([FromBody] ModulesDto entity)
        {
            if (entity == null)
            {
                return BadRequest("Entity is null");
            }
            var result = await _ModulesBusiness.Save(entity);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] ModulesDto entity)
        {
            if (entity == null || id != entity.Id)
            {
                return BadRequest();
            }
            await _ModulesBusiness.Update(id, entity);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _ModulesBusiness.Delete(id);
            return NoContent();
        }
    }
}
