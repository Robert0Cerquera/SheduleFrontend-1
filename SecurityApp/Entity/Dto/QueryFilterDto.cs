using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Model.Dto
{
    public class QueryFilterDto
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public string Filter { get; set; }
        public string ColumnOrder { get; set; }
        public string DirectionOrder { get; set; }
    }
}
