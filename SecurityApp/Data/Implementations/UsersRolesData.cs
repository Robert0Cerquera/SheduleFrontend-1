using Data.Interfaces;
using Entity.Context;
using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Implementations
{
    public class UsersRolesData : IUsersRolesData
    {

        private readonly AplicationDbContext context;
        protected readonly IConfiguration configuration;

        public UsersRolesData(AplicationDbContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }

        public async Task Delete(int id)
        {
            var entity = await GetById(id);
            if (entity == null)
            {
                throw new Exception("Registro no encontrado");
            }
            entity.deletedAt = DateTime.Parse(DateTime.Today.ToString());
            context.UsersRoles.Update(entity);
            await context.SaveChangesAsync();
        }

        public async Task<IEnumerable<DataSelectDto>> GetAllSelect()
        {
            var sql = @"SELECT 
                                uR.Id,
                                CONCAT(r.name, ' - ', u.username) AS TextoMostrar 
                        FROM 
                                UsersRoles uR
                        INNER JOIN 
                                Roles r ON uR.roleId = r.Id
                        INNER JOIN 
                                Users u ON uR.userId = u.Id
                        WHERE 
                                uR.state = 1
                        ORDER BY 
                                uR.Id ASC";
            return await this.context.QueryAsync<DataSelectDto>(sql);
        }

        public async Task<UserRole> GetById(int id)
        {
            var sql = @"SELECT * FROM UsersRoles WHERE Id = @Id ORDER BY Id ASC";
            return await this.context.QueryFirstOrDefaultAsync<UserRole>(sql, new { Id = id });
        }



        public async Task<UserRole> Save(UserRole entity)
        {
            context.UsersRoles.Add(entity);
            await context.SaveChangesAsync();
            return entity;
        }

        public async Task Update(UserRole entity)
        {
            context.Entry(entity).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await context.SaveChangesAsync();
        }

        

        public async Task<IEnumerable<UserRole>> SelectAll()
        {
            var sql = @"SELECT * FROM UsersRoles WHERE deletedAt IS NULL AND state = 1
                    ORDER BY Id ASC; ";

            try
            {
                return await this.context.QueryAsync<UserRole>(sql);
            }
            catch (Exception ex)
            {
                // Manejar excepciones según sea necesario
                throw new ApplicationException("Error al ejecutar la consulta XD", ex);
            }


            
        }
    }
}
