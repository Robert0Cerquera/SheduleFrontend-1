﻿using Data.Interfaces;
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
    public class RolesViewsData : IRolesViewsData
    {
        private readonly AplicationDbContext context;
        protected readonly IConfiguration configuration;

        public RolesViewsData(AplicationDbContext context, IConfiguration configuration)
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
            context.RolesViews.Update(entity);
            await context.SaveChangesAsync();
        }

        public async Task<IEnumerable<DataSelectDto>> GetAllSelect()
        {
            var sql = @"SELECT 
                                rV.Id,
                                CONCAT(r.name, ' - ', v.name) AS TextoMostrar 
                        FROM 
                                RolesViews rV
                        INNER JOIN 
                                Roles r ON rV.roleId = r.Id
                        INNER JOIN 
                                Views v ON rV.viewId = v.Id
                        WHERE 
                                rV.state = 1
                        ORDER BY 
                                rV.Id ASC; ";
            return await this.context.QueryAsync<DataSelectDto>(sql);
        }

        public async Task<RoleView> GetById(int id)
        {
            var sql = @"SELECT * FROM RolesViews WHERE Id = @Id ORDER BY Id ASC";
            return await this.context.QueryFirstOrDefaultAsync<RoleView>(sql, new { Id = id });
        }



        public async Task<RoleView> Save(RoleView entity)
        {
            context.RolesViews.Add(entity);
            await context.SaveChangesAsync();
            return entity;
        }

        public async Task Update(RoleView entity)
        {
            context.Entry(entity).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await context.SaveChangesAsync();
        }



        public async Task<IEnumerable<RoleView>> SelectAll()
        {
            var sql = @"SELECT * FROM RolesViews WHERE deletedAt IS NULL AND state = 1
                    ORDER BY Id ASC; ";

            
            try
            {
                return await this.context.QueryAsync<RoleView>(sql);
            }
            catch (Exception ex)
            {
                // Manejar excepciones según sea necesario
                throw new ApplicationException("Error al ejecutar la consulta XD", ex);
            }
        }



    }
}
