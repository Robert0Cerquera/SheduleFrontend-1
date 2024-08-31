using Entity.Model.Dto;
using Entity.Model.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Security.Interfaces
{
    public interface IRolesBusiness
    {
        Task Delete(int id);
        Task<IEnumerable<DataSelectDto>> GetAllSelect();
        Task<IEnumerable<Role>> SelectAll();
        Task<RolesDto> GetById(int id);
        Task<Role> Save(RolesDto entity);
        Task Update(int id, RolesDto entity);

        
    }
}
