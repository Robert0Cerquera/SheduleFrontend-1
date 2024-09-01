using Business.Security.Interfaces;
using Controller.Controllers.Interfaces;
using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers.Implementations
{
    [ApiController]
    [Route("[controller]")]
    public class UsersControllers : ControllerBase, IUsersControllers
    {

        private readonly IUsersBusiness _UsersBusiness;

        public UsersControllers (IUsersBusiness UsersBusiness)
        {
            _UsersBusiness = UsersBusiness;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> SelectAll()
        {
            var result = await _UsersBusiness.SelectAll();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UsersDto>> GetById(int id)
        {
            var result = await _UsersBusiness.GetById(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("select")]
        public async Task<ActionResult<IEnumerable<DataSelectDto>>> GetAllSelect()
        {
            var result = await _UsersBusiness.GetAllSelect();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<UsersDto>> Save([FromBody] UsersDto entity)
        {
            if (entity == null)
            {
                return BadRequest("Entity is null");
            }
            var result = await _UsersBusiness.Save(entity);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UsersDto entity)
        {
            if (entity == null || id != entity.Id)
            {
                return BadRequest();
            }
            await _UsersBusiness.Update(id, entity);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _UsersBusiness.Delete(id);
            return NoContent();
        }

        /*
        [HttpGet("Nombre/{username}")]
        public async Task<ActionResult<UsersDto>> GetByUsername(Users users, int Id)
        {
            var result = await _UsersBusiness.GetByUsername(users, Id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("Contraseña/{password}")]
        public async Task<ActionResult<UsersDto>> GetByPassword(Users users, int Id)
        {
            var result = await _UsersBusiness.GetByPassword(users, Id);
            {
                return NotFound();
            }
            return Ok(result);
        }
        */
    }
}
