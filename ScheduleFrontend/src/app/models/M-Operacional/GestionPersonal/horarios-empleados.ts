export interface HorariosEmpleados {
  id: number;                                // Identificador único del horario
  state: boolean;                            // Estado del horario
  createdAt?: string;                        // Fecha de creación (opcional)
  updatedAt?: string;                        // Fecha de actualización (opcional)
  deletedAt?: string | null;                 // Fecha de eliminación (opcional, puede ser nulo)
  horaInicio: string;                        // Hora de inicio en formato ISO (ejemplo: "2024-10-09T10:00:00")
  horaFin: string;                           // Hora de fin en formato ISO (ejemplo: "2024-10-09T18:00:00")
  empleadoId: {                              // Objeto que representa el empleado
    id: number;                              // Identificador único del empleado
    // Otros campos de empleado, si es necesario
  };
  programacionFichaId: {                     // Objeto que representa la programación de ficha
    id: number,
    nombre?: string;                              // Identificador único de la programación de ficha
    // Otros campos de programacionFicha, si es necesario
  };
}
