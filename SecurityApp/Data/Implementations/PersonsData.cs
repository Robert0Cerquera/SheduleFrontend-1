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
    
        public class PersonsData : IPersonsData
        {
            private readonly AplicationDbContext context;
            protected readonly IConfiguration configuration;

            public PersonsData(AplicationDbContext context, IConfiguration configuration)
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
                context.Persons.Update(entity);
                await context.SaveChangesAsync();
            }

            public async Task<IEnumerable<DataSelectDto>> GetAllSelect()
            {
                var sql = @"SELECT 
                        Id,
                        CONCAT( firstName, ' - ', secondSurname) AS TextoMostrar
                    FROM 
                        Persons
                    WHERE deletedAt IS NULL AND state = 1
                    ORDER BY Id ASC";
                return await this.context.QueryAsync<DataSelectDto>(sql);
            }

            public async Task<Person> GetById(int id)
            {
                var sql = @"SELECT * FROM Persons WHERE Id = @Id ORDER BY Id ASC";
                return await this.context.QueryFirstOrDefaultAsync<Person>(sql, new { Id = id });

            }



            public async Task<Person> Save(Person entity)
            {
                context.Persons.Add(entity);
                await context.SaveChangesAsync();
                return entity;
            }

            public async Task Update(Person entity)
            {
                context.Entry(entity).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                await context.SaveChangesAsync();
            }

            public async Task<Person> GetByDocument(string document)
            {
                return await this.context.Persons.AsNoTracking().Where(item => item.document == document).FirstOrDefaultAsync();
            }

        public async Task<IEnumerable<Person>> SelectAll()
        {
            var sql = @"SELECT * FROM Persons WHERE DeletedAt IS NULL AND state = 1
                       ORDER BY Id ASC; ";
            try
            {
                return await this.context.QueryAsync<Person>(sql);
            }
            catch (Exception ex)
            {
                // Manejar excepciones según sea necesario
                throw new ApplicationException("Error al ejecutar la consulta XD", ex);
            }
            
        }

    }
    }

