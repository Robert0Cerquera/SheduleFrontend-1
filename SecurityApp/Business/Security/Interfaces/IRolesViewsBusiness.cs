using Entity.Model.Dto;
using Entity.Model.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Security.Interfaces
{
    public interface IRolesViewsBusiness
    {
        Task Delete(int id);
        Task<IEnumerable<DataSelectDto>> GetAllSelect();
        Task<IEnumerable<RoleView>> SelectAll();
        Task<RolesViewsDto> GetById(int id);
        Task<RoleView> Save(RolesViewsDto entity);
        Task Update(int id, RolesViewsDto entity);
    }
}
