using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Model.Security
{
    public class RoleView
    {

        public int Id { get; set; }

        public Role role { get; set; }
        public int roleId { get; set; }

        public View view { get; set; }
        public int viewId { get; set; }

        public bool state { get; set; }

        public DateTime createdAt { get; set; }
        public DateTime createdBy { get; set; }

        public DateTime updatedAt { get; set; }
        public DateTime updatedBy { get; set; }

        public DateTime? deletedAt { get; set; }
        public DateTime? deletedBy { get; set; }

        public RoleView()
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
