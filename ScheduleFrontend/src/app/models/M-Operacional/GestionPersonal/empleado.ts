

export interface Empleado {
  id: number;                              // Identificador único del empleado
  state: boolean;                          // Estado del empleado
  createdAt?: string;                      // Fecha de creación (opcional)
  updatedAt?: string;                      // Fecha de actualización (opcional)
  deletedAt?: string | null;               // Fecha de eliminación (opcional, puede ser nulo)
  identificador: string;                   // Identificador del empleado
  fechaInicio: string;                     // Fecha de inicio en formato ISO 8601
  fechaFin: string;                        // Fecha de fin en formato ISO 8601
  cargoId: {                               // Objeto que representa la ficha
    id: number,
    nombre?: string;                           // Identificador único de la ficha

  };
  tipoContratoId: {
    id: number,
    nombre?: string;

  };
  personaId: {
    id: number,
    nombre?: string;
    //
  };
}
