export interface ProgramacionFicha {
  id: number;                              // Identificador único de la programación de ficha
  state: boolean;                          // Estado de la programación de ficha
  createdAt?: string;                      // Fecha de creación (opcional)
  updatedAt?: string;                      // Fecha de actualización (opcional)
  deletedAt?: string | null;               // Fecha de eliminación (opcional, puede ser nulo)
  codigo: string;                          // Código de la programación de ficha
  fechaInicio: string;                     // Fecha de inicio en formato ISO 8601
  fechaFin: string;                        // Fecha de fin en formato ISO 8601
  trimestre: string;                       // Trimestre (almacenado como string o enum)
  cantidadHora: number;                    // Cantidad de horas
}
