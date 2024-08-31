using Entity.Model.Dto;
using Entity.Model.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Interfaces
{
    public interface IPersonsData
    {
        Task Delete(int id);
        Task<IEnumerable<DataSelectDto>> GetAllSelect();
        Task<IEnumerable<Person>> SelectAll();
        Task<Person> GetById(int id);
        Task<Person> Save(Person entity);
        Task Update(Person entity);
        Task<Person> GetByDocument(string document);
    }
}
