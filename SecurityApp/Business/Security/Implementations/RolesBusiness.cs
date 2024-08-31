using Business.Security.Interfaces;
using Data.Interfaces;
using Entity.Model.Dto;
using Entity.Model.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Business.Security.Implementations
{
    public class RolesBusiness : IRolesBusiness
    {
        private readonly IRolesData data;

        public RolesBusiness(IRolesData data)
        {
            this.data = data;
        }

        public async Task Delete(int id)
        {
            await this.data.Delete(id);
        }

        public async Task<IEnumerable<DataSelectDto>> GetAllSelect()
        {
            return await data.GetAllSelect();
        }

        public async Task<IEnumerable<Role>> SelectAll()
        {
            return await this.data.SelectAll();
        }
        public async Task<RolesDto> GetById(int id)
        {
            Role role = await this.data.GetById(id);
            RolesDto roleDto = new RolesDto();

            {
                roleDto.Id = role.Id;
                roleDto.name = role.name;
                roleDto.description = role.description;
                roleDto.code = role.code;
                roleDto.state = role.state;


                return roleDto;
            };
        }

        public async Task<Role> Save(RolesDto entity)
        {
            Role role = new Role();
            role = mapearDatos(role, entity);

            return await data.Save(role);
        }

        public async Task Update(int id, RolesDto entity)
        {
            Role role = await this.data.GetById(id);
            if (role == null)
            {
                throw new ArgumentNullException("Registro no encontrado", nameof(entity));
            }
            role = this.mapearDatos(role, entity);

            await this.data.Update(role);
        }

        private Role mapearDatos(Role role, RolesDto entity)
        {
            role.Id = entity.Id;
            role.name = entity.name;
            role.description = entity.description;
            role.state = entity.state;
            role.code = entity.code;

            return role;
        }

       


    }
}
