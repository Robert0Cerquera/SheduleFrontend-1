using Entity.Model.Dto;
using Entity.Model.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Security.Interfaces
{
    public interface IUsersRolesBusiness
    {
        Task Delete(int id);
        Task<IEnumerable<DataSelectDto>> GetAllSelect();
        Task<IEnumerable<UserRole>> SelectAll();
        Task<UsersRolesDto> GetById(int id);
        Task<UserRole> Save(UsersRolesDto entity);
        Task Update(int id, UsersRolesDto entity);
    }
}
