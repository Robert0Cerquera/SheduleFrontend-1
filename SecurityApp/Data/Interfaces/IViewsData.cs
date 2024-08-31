using Entity.Model.Dto;
using Entity.Model.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Interfaces
{
    public interface IViewsData
    {
        Task Delete(int id);
        Task<IEnumerable<DataSelectDto>> GetAllSelect();
        Task<IEnumerable<View>> SelectAll();
        Task<View> GetById(int id);
        Task<View> Save(View entity);
        Task Update(View entity);
        Task<View> GetByCode(string code);
    }
}
