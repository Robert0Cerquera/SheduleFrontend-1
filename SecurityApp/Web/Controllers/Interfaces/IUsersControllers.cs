using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers.Interfaces
{
    public interface IUsersControllers
    {

        Task<ActionResult<IEnumerable<User>>> SelectAll();
        Task<ActionResult<UsersDto>> GetById(int id);
        Task<ActionResult<IEnumerable<DataSelectDto>>> GetAllSelect();
        Task<ActionResult<UsersDto>> Save([FromBody] UsersDto entity);
        Task<IActionResult> Update(int id, UsersDto entity);
        Task<IActionResult> Delete(int id);

        /*
        Task<ActionResult<UsersDto>> GetByUsersname(Users users, int Id);
        Task<ActionResult<UsersDto>> GetByPassword(Users users, int Id);
        */
        
        }
}
