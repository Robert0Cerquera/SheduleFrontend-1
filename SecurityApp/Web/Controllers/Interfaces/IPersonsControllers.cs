using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers.Interfaces
{
    public interface IPersonsControllers
    {

        Task<ActionResult<IEnumerable<Person>>> SelectAll();
        Task<ActionResult<PersonsDto>> GetById(int id);
        Task<ActionResult<IEnumerable<DataSelectDto>>> GetAllSelect();
        Task<ActionResult<PersonsDto>> Save([FromBody] PersonsDto entity);
        Task<IActionResult> Update(int id, PersonsDto entity);
        Task<IActionResult> Delete(int id);
       
    }
}
