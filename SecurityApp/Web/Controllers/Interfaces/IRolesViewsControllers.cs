using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers.Interfaces
{
    public interface IRolesViewsControllers
    {

        Task<ActionResult<IEnumerable<RoleView>>> SelectAll();
        Task<ActionResult<RolesViewsDto>> GetById(int id);
        Task<ActionResult<IEnumerable<DataSelectDto>>> GetAllSelect();
        Task<ActionResult<RolesViewsDto>> Save([FromBody] RolesViewsDto entity);
        Task<IActionResult> Update(int id, RolesViewsDto entity);
        Task<IActionResult> Delete(int id);

    }
}
