using Entity.Model.Dto;
using Entity.Model.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Interfaces
{
    public interface IRolesData
    {
        Task Delete(int id);
        Task<IEnumerable<DataSelectDto>> GetAllSelect();

        Task<IEnumerable<Role>> SelectAll();
        Task<Role> GetById(int id);
        Task<Role> Save(Role entity);
        Task Update(Role entity);
        Task<Role> GetByCode(string code);
    }
}
