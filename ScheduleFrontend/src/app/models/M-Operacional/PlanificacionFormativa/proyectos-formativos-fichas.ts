export interface ProyectosFormativosFichas {
  id: number;                               // Identificador único del registro
  state: boolean;                           // Estado del registro
  createdAt?: string;                       // Fecha de creación (opcional)
  updatedAt?: string;                       // Fecha de actualización (opcional)
  deletedAt?: string | null;                // Fecha de eliminación (opcional, puede ser nulo)
  proyectoFormativoId: {                    // Objeto que representa el proyecto formativo
    id: number,
    nombre?: string;                            // Identificador único del proyecto formativo
    // Otros campos del proyecto formativo, si es necesario
  };
  fichaId: {                                // Objeto que representa la ficha
    id: number,
    nombre?: string;                            // Identificador único de la ficha
    // Otros campos de la ficha, si es necesario
  };
}
