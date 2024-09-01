using Entity.Model.Dto;
using Entity.Model.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Security.Interfaces
{
    public interface IPersonsBusiness
    {
        Task Delete(int id);
        Task<IEnumerable<DataSelectDto>> GetAllSelect();
        Task<IEnumerable<Person>> SelectAll();
        Task<PersonsDto> GetById(int id);
        Task<Person> Save(PersonsDto entity);
        Task Update(int id, PersonsDto entity);

        
    }
}
