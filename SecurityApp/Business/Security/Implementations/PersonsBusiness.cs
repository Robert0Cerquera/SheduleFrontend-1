using Business.Security.Interfaces;
using Data.Interfaces;
using Entity.Model.Dto;
using Entity.Model.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Azure.Core.HttpHeader;

namespace Business.Security.Implementations
{
    public class PersonsBusiness : IPersonsBusiness
    {
        private readonly IPersonsData data;

        public PersonsBusiness(IPersonsData data)
        {
            this.data = data;
        }

        public async Task Delete(int id)
        {
            await data.Delete(id);
        }

        public async Task<IEnumerable<DataSelectDto>> GetAllSelect()
        {
            return await this.data.GetAllSelect();

        }
        public async Task<IEnumerable<Person>> SelectAll()
        {
            return await this.data.SelectAll();
        }


        public async Task<PersonsDto> GetById(int id)
        {
            Person person = await this.data.GetById(id);
            PersonsDto personDto = new PersonsDto();

            {
                personDto.Id = person.Id;
                personDto.firstName = person.firstName;
                personDto.secondName = person.secondName;
                personDto.firstSurname = person.firstSurname;
                personDto.secondSurname = person.secondSurname;
                //personDto.Names = $"{person.firstName} {person.secondName}"; // Concatenar nombres
                //personDto.Surnames = $"{person.firstSurname} {person.secondSurname}"; // Concatenar apellidos
                personDto.email = person.email;
                personDto.gender = person.gender;
                personDto.document = person.document;
                personDto.typeDocument = person.typeDocument;
                personDto.address = person.address;
                personDto.phone = person.phone;
                

                return personDto;
            };


        }

        public async Task<Person> Save(PersonsDto entity)
        {
            Person person = new Person();
            person = mapearDatos(person, entity);

            return await data.Save(person);
        }

        public async Task Update(int id, PersonsDto entity)
        {
            Person person = await data.GetById(id);
            if (person == null)
            {
                throw new ArgumentNullException("Registro no encontrado", nameof(entity));
            }
            person = mapearDatos(person, entity);

            await data.Update(person);
        }

        private Person mapearDatos(Person person, PersonsDto entity)
        {
            //var nameParts = entity.Names?.Split(' ') ?? new string[0];
            //person.firstName = nameParts.ElementAtOrDefault(0);
            //person.secondName = nameParts.Length > 1 ? string.Join(" ", nameParts.Skip(1)) : null;
            //var surnameParts = entity.Surnames?.Split(' ') ?? new string[0];
            //person.firstSurname = surnameParts.ElementAtOrDefault(0);
            //person.secondSurname = surnameParts.Length > 1 ? string.Join(" ", surnameParts.Skip(1)) : null;
            person.firstName = entity.firstName;
            person.secondName = entity.secondName;
            person.firstSurname = entity.firstSurname;
            person.secondSurname = entity.secondSurname;
            person.email = entity.email;
            person.gender = entity.gender;
            person.document = entity.document;
            person.typeDocument = entity.typeDocument;
            person.address = entity.address;
            person.phone = entity.phone;
            
            

            return person;
        }


    }
}
