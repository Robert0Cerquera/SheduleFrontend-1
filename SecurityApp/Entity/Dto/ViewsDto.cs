using Entity.Model.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Model.Dto
{
    public class ViewsDto
    {

        public int Id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string route { get; set; }
        public int moduleId { get; set; }
        public string code { get; set; }
        public bool state { get; set; }

        
    }
}
