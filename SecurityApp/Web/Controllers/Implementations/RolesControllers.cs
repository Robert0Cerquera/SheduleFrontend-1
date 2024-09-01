using Business.Security.Interfaces;
using Controller.Controllers.Interfaces;
using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers.Implementations
{
    [ApiController]
    [Route("[controller]")]
    public class RolesControllers : ControllerBase, IRolesControllers
    {
        private readonly IRolesBusiness _RolesBusiness;

        public RolesControllers (IRolesBusiness RolesBusiness)
        {
            _RolesBusiness = RolesBusiness;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Role>>> SelectAll()
        {
            var result = await _RolesBusiness.SelectAll();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RolesDto>> GetById(int id)
        {
            var result = await _RolesBusiness.GetById(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("select")]
        public async Task<ActionResult<IEnumerable<DataSelectDto>>> GetAllSelect()
        {
            var result = await _RolesBusiness.GetAllSelect();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<RolesDto>> Save([FromBody] RolesDto entity)
        {
            if (entity == null)
            {
                return BadRequest("Entity is null");
            }
            var result = await _RolesBusiness.Save(entity);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] RolesDto entity)
        {
            if (entity == null || id != entity.Id)
            {
                return BadRequest();
            }
            await _RolesBusiness.Update(id, entity);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _RolesBusiness.Delete(id);
            return NoContent();
        }

    }
}
