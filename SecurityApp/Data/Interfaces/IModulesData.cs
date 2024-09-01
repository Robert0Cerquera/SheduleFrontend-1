using Entity.Context;
using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Interfaces
{
    public interface IModulesData
    {

        
         Task Delete(int id);
         Task<IEnumerable<DataSelectDto>> GetAllSelect();
        Task<IEnumerable<Modules>> SelectAll();
        Task<Modules> GetById(int id);
         Task<Modules> Save(Modules entity);
        Task Update(Modules entity);
        Task<Modules> GetByCode(string code);

        
        
    }
    
}
