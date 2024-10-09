export interface HorariosAmbientes {
  id: number;                              // Identificador único de los horarios de ambientes
  state: boolean;                          // Estado de los horarios de ambientes
  createdAt?: string;                      // Fecha de creación (opcional)
  updatedAt?: string;                      // Fecha de actualización (opcional)
  deletedAt?: string | null;               // Fecha de eliminación (opcional, puede ser nulo)
  horaInicio: string;                      // Hora de inicio en formato ISO 8601
  horaFin: string;                         // Hora de fin en formato ISO 8601
  ambienteId: {                            // Objeto que representa el ambiente
    id: number,
    nombre?: string;                           // Identificador único del ambiente
    // Otros campos de ambiente, si es necesario
  };
  programacionFichaId: {                   // Objeto que representa la programación de la ficha
    id: number,
    nombre?: string;                           // Identificador único de la programación de la ficha
    // Otros campos de programación de ficha, si es necesario
  };
}
