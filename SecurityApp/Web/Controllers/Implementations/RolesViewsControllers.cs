using Business.Security.Interfaces;
using Controller.Controllers.Interfaces;
using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers.Implementations
{

    [ApiController]
    [Route("[controller]")]
    public class RolesViewsControllers : ControllerBase, IRolesViewsControllers
    {
        private readonly IRolesViewsBusiness _Roles_ViewsBusiness;

        public RolesViewsControllers(IRolesViewsBusiness Roles_ViewsBusiness)
        {
            _Roles_ViewsBusiness = Roles_ViewsBusiness;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoleView>>> SelectAll()
        {
            var result = await _Roles_ViewsBusiness.SelectAll();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RolesViewsDto>> GetById(int id)
        {
            var result = await _Roles_ViewsBusiness.GetById(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("select")]
        public async Task<ActionResult<IEnumerable<DataSelectDto>>> GetAllSelect()
        {
            var result = await _Roles_ViewsBusiness.GetAllSelect();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<RolesViewsDto>> Save([FromBody] RolesViewsDto entity)
        {
            if (entity == null)
            {
                return BadRequest("Entity is null");
            }
            var result = await _Roles_ViewsBusiness.Save(entity);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] RolesViewsDto entity)
        {
            if (entity == null || id != entity.Id)
            {
                return BadRequest();
            }
            await _Roles_ViewsBusiness.Update(id, entity);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _Roles_ViewsBusiness.Delete(id);
            return NoContent();
        }


    }
}
