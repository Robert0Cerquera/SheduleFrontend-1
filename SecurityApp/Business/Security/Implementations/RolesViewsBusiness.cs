using Business.Security.Interfaces;
using Data.Interfaces;
using Entity.Model.Dto;
using Entity.Model.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Security.Implementations
{
    public class RolesViewsBusiness : IRolesViewsBusiness
    {
        private readonly IRolesViewsData data;

        public RolesViewsBusiness(IRolesViewsData data)
        {
            this.data = data;
        }

        public async Task Delete(int id)
        {
            await data.Delete(id);
        }

        public async Task<IEnumerable<DataSelectDto>> GetAllSelect()
        {
            return await data.GetAllSelect();
        }
        public async Task<IEnumerable<RoleView>> SelectAll()
        {
            return await this.data.SelectAll();
        }
        public async Task<RolesViewsDto> GetById(int id)
        {
            RoleView rolView = await this.data.GetById(id);
            RolesViewsDto rolViewDto = new RolesViewsDto();

            {

                rolViewDto.Id = rolView.Id;
                rolViewDto.roleId = rolView.roleId;
                rolViewDto.viewId = rolView.viewId;
                rolViewDto.state = rolView.state;
                


                return rolViewDto;
            }

        }

        public async Task<RoleView> Save(RolesViewsDto entity)
        {
            RoleView role_view = new RoleView();
            role_view = mapearDatos(role_view, entity);

            return await data.Save(role_view);
        }

        public async Task Update(int id, RolesViewsDto entity)
        {
            RoleView role_view = await data.GetById(id);
            if (role_view == null)
            {
                throw new Exception("Registro no encontrado");
            }
            role_view = mapearDatos(role_view, entity);

            await data.Update(role_view);
        }

        private RoleView mapearDatos(RoleView rolView, RolesViewsDto entity)
        {
            rolView.Id = entity.Id;
            rolView.roleId = entity.roleId;
            rolView.viewId = entity.viewId;
            rolView.state = entity.state;
           

            return rolView;
        }
    }
}
