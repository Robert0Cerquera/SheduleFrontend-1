using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Model.Security
{
    public class Role
    {

        public int Id { get; set; }
        public string name { get; set; }
        public string description { get; set; }

        public string code { get; set; }
        public bool state { get; set; }

        public DateTime createdAt { get; set; }
        public DateTime createdBy { get; set; }

        public DateTime updatedAt { get; set; }
        public DateTime updatedBy { get; set; }

        public DateTime? deletedAt { get; set; }
        public DateTime? deletedBy { get; set; }

        public Role()
        {
            createdAt = DateTime.UtcNow;
            createdBy = DateTime.UtcNow; // Puede ser cambiado según la lógica de tu aplicación
            updatedAt = DateTime.UtcNow;
            updatedBy = DateTime.UtcNow; // Puede ser cambiado según la lógica de tu aplicación
            deletedAt = null;
            deletedBy = null; // No establezcas valores predeterminados para deletedAt y deletedBy
        }
    }
}
