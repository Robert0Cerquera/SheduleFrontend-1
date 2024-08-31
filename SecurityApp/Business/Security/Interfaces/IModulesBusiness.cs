using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity.Model.Dto;
using Entity.Model.Security;

namespace Business.Security.Interfaces
{
    public interface IModulesBusiness
    {

        Task Delete(int id);
        Task<IEnumerable<DataSelectDto>> GetAllSelect();
        Task<IEnumerable<Modules>> SelectAll();
        Task<ModulesDto> GetById(int id);
        Task<Modules> Save(ModulesDto entity);
        Task Update(int id, ModulesDto entity);
    }
}
