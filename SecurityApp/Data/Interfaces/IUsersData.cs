using Entity.Model.Dto;
using Entity.Model.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Interfaces
{
    public interface IUsersData
    {
        Task Delete(int id);
        Task<IEnumerable<DataSelectDto>> GetAllSelect();
        Task<IEnumerable<User>> SelectAll();
        Task<User> GetById(int id);
        Task<User> Save(User entity);
        Task Update(User entity);
        Task<User> GetByUsername(string username);
    }
}
