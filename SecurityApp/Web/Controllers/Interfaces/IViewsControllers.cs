using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers.Interfaces
{
    public interface IViewsControllers
    {
        Task<ActionResult<IEnumerable<View>>> SelectAll();
        Task<ActionResult<ViewsDto>> GetById(int id);
        Task<ActionResult<IEnumerable<DataSelectDto>>> GetAllSelect();
        Task<ActionResult<ViewsDto>> Save([FromBody] ViewsDto entity);
        Task<IActionResult> Update(int id, ViewsDto entity);
        Task<IActionResult> Delete(int id);
        /*
        Task<ActionResult<ViewsDto>> GetByNombre(string nombre);
        */
    }

}
