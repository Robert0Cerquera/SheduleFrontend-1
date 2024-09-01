using Business.Security.Implementations;
using Business.Security.Interfaces;
using Controller.Controllers.Interfaces;
using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers.Implementations
{
    [ApiController]
    [Route("[controller]")]
    public class UsersRolesControllers : ControllerBase, IUsersRolesControllers
    {
        private readonly IUsersRolesBusiness _UserRoleBusiness;

        public UsersRolesControllers(IUsersRolesBusiness UsersRolesBusiness)
        {
            _UserRoleBusiness = UsersRolesBusiness;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserRole>>> SelectAll()
        {
            var result = await _UserRoleBusiness.SelectAll();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UsersRolesDto>> GetById(int id)
        {
            var result = await _UserRoleBusiness.GetById(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("select")]
        public async Task<ActionResult<IEnumerable<DataSelectDto>>> GetAllSelect()
        {
            var result = await _UserRoleBusiness.GetAllSelect();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<UsersRolesDto>> Save([FromBody] UsersRolesDto entity)
        {
            if (entity == null)
            {
                return BadRequest("Entity is null");
            }
            var result = await _UserRoleBusiness.Save(entity);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UsersRolesDto entity)
        {
            if (entity == null || id != entity.Id)
            {
                return BadRequest();
            }
            await _UserRoleBusiness.Update(id, entity);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _UserRoleBusiness.Delete(id);
            return NoContent();
        }

    }
}
