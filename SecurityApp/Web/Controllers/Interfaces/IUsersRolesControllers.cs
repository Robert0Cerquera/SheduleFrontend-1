using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers.Interfaces
{
    public interface IUsersRolesControllers
    {
        Task<ActionResult<IEnumerable<UserRole>>> SelectAll();
        Task<ActionResult<UsersRolesDto>> GetById(int id);
        Task<ActionResult<IEnumerable<DataSelectDto>>> GetAllSelect();
        Task<ActionResult<UsersRolesDto>> Save([FromBody] UsersRolesDto entity);
        Task<IActionResult> Update(int id, UsersRolesDto entity);
        Task<IActionResult> Delete(int id);
    }
}
