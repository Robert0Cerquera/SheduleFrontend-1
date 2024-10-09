export interface Ficha {
  id: number;                          // Identificador único de la ficha
  state: boolean;                      // Estado de la ficha
  createdAt?: string;                  // Fecha de creación (opcional)
  updatedAt?: string;                  // Fecha de actualización (opcional)
  deletedAt?: string | null;           // Fecha de eliminación (opcional, puede ser nulo)
  codigo: string;                      // Código de la ficha
  fechaInicio: string;                 // Fecha de inicio en formato ISO 8601
  fechaFin: string;                    // Fecha de fin en formato ISO 8601
  cupo: number;                        // Cupo disponible
  etapa: string;                       // Etapa de la ficha
  jornadaId: {                        // Objeto que representa la jornada
    id: number;                       // Identificador único de la jornada
    // Otros campos de jornada, si es necesario
  };
  convocatoriaId: {                   // Objeto que representa la convocatoria
    id: number,
    nombre?: string;                       // Identificador único de la convocatoria
    // Otros campos de convocatoria, si es necesario
  };
  programaFormacionId: {              // Objeto que representa el programa de formación
    id: number,
    nombre?: string;                       // Identificador único del programa de formación
    // Otros campos de programa de formación, si es necesario
  };
}
