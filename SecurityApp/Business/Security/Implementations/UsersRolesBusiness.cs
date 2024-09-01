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
    public class UsersRolesBusiness : IUsersRolesBusiness
    {
        private readonly IUsersRolesData data;

        public UsersRolesBusiness(IUsersRolesData data)
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

        public async Task<IEnumerable<UserRole>> SelectAll()
        {
            return await this.data.SelectAll();
        }


        public async Task<UsersRolesDto> GetById(int id)
        {
            UserRole userRol = await this.data.GetById(id);
            UsersRolesDto users_rolesDto = new UsersRolesDto();

            {
                users_rolesDto.Id = userRol.Id;
                users_rolesDto.userId = userRol.userId;
                users_rolesDto.roleId = userRol.roleId;
                users_rolesDto.state = userRol.state;
                users_rolesDto.state = userRol.state;

                return users_rolesDto;
            }

        }

        public async Task<UserRole> Save(UsersRolesDto entity)
        {
            UserRole users_roles = new UserRole();
            users_roles = mapearDatos(users_roles, entity);

            return await data.Save(users_roles);
        }

        public async Task Update(int id, UsersRolesDto entity)
        {
            UserRole user_role = await data.GetById(id);
            if (user_role == null)
            {
                throw new Exception("Registro no encontrado");
            }
            user_role = mapearDatos(user_role, entity);

            await data.Update(user_role);
        }


        private UserRole mapearDatos(UserRole userRol, UsersRolesDto entity)
        {
            userRol.Id = entity.Id;
            userRol.userId = entity.userId;
            userRol.roleId = entity.roleId;
            userRol.state = entity.state;
            

            return userRol;
        }
    }
}
