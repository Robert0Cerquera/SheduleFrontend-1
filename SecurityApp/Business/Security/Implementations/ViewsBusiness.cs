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
    public class ViewsBusiness : IViewsBusiness
    {
        private readonly IViewsData data;

        public ViewsBusiness(IViewsData data)
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

        public async Task<IEnumerable<View>> SelectAll()
        {
            return await this.data.SelectAll();
        }

        public async Task<ViewsDto> GetById(int id)
        {
            View view = await this.data.GetById(id);
            ViewsDto ViewsDto = new ViewsDto();
            
            ViewsDto.Id = view.Id;
            ViewsDto.name = view.name;
            ViewsDto.description = view.description;
            ViewsDto.route = view.route;
            ViewsDto.moduleId = view.moduleId;
            ViewsDto.code = view.code;
            ViewsDto.state = view.state;
            



            return ViewsDto;
        }

        public async Task<View> Save(ViewsDto entity)
        {
            View view = new View();
            view = mapearDatos(view, entity);

            return await data.Save(view);
        }

        public async Task Update(int id, ViewsDto entity)
        {
            View view = await data.GetById(id);
            if (view == null)
            {
                throw new Exception("Registro no encontrado");
            }
            view = mapearDatos(view, entity);

            await data.Update(view);
        }

        private View mapearDatos(View view, ViewsDto entity)
        {
            
            view.Id = entity.Id;
            view.name = entity.name;
            view.description = entity.description;
            view.route = entity.route;
            view.moduleId = entity.moduleId;
            view.code = entity.code;
            view.state = entity.state;
            
            return view;
        }
    }
}
