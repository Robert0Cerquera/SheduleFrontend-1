    using Data.Interfaces;
using Entity.Context;
using Entity.Model.Dto;
using Entity.Model.Security;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Data.Implementations
{
    public class ModulesData : IModulesData
    {
        private readonly AplicationDbContext context;
        protected readonly IConfiguration configuration;

        public ModulesData(AplicationDbContext context, IConfiguration configuration)
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
            context.Module.Update(entity);
            await context.SaveChangesAsync();
        }

        public async Task<IEnumerable<DataSelectDto>> GetAllSelect()
        {
            var sql = @"SELECT 
                        Id,
                        CONCAT(code, ' - ', name) AS TextoMostrar 
                    FROM 
                        Module
                    WHERE DeletedAt IS NULL AND state = 1
                    ORDER BY Id ASC";
            return await this.context.QueryAsync<DataSelectDto>(sql);
        }

        public async Task<Modules> GetById(int id)
        {
            var sql = @"SELECT * FROM Module WHERE Id = @Id ORDER BY Id ASC";
            return await this.context.QueryFirstOrDefaultAsync<Modules>(sql, new { Id = id });
        }

        

        public async Task<Modules> Save(Modules entity)
        {
            context.Module.Add(entity);
            await context.SaveChangesAsync();
            return entity;
        }

        public async Task Update(Modules entity)
        {
            context.Entry(entity).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await context.SaveChangesAsync();
        }

        public async Task<Modules> GetByCode(string code)
        {
            return await this.context.Module.AsNoTracking().Where(item => item.code == code).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Modules>> SelectAll()
        {
            var sql = @"SELECT * FROM Module  WHERE DeletedAt IS NULL AND state = 1
                    ORDER BY Id ASC";


            try
            {
                return await this.context.QueryAsync<Modules>(sql);
            }
            catch (Exception ex)
            {
                // Manejar excepciones según sea necesario
                throw new ApplicationException("Error al ejecutar la consulta XD", ex);
            }
            
        }

    }


}
