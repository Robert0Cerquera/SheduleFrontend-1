export interface Matricula {
  id: number;                              // Identificador único de la matrícula
  state: boolean;                          // Estado de la matrícula
  createdAt?: string;                      // Fecha de creación (opcional)
  updatedAt?: string;                      // Fecha de actualización (opcional)
  deletedAt?: string | null;               // Fecha de eliminación (opcional, puede ser nulo)
  estadoProceso: string;                   // Estado del proceso (almacenado como string o enum)
  personaId: {                             // Objeto que representa a la persona
    id: number,
    nombre?: string;                           // Identificador único de la persona
    // Otros campos de persona, si es necesario
  };
  fichaId: {                               // Objeto que representa la ficha
    id: number,
    nombre?: string;                           // Identificador único de la ficha
    // Otros campos de ficha, si es necesario
  };
}
