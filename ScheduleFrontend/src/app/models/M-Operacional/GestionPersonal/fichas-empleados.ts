export interface FichasEmpleados {
  id: number;                              // Identificador único de la relación
  state: boolean;                          // Estado de la relación
  createdAt?: string;                      // Fecha de creación (opcional)
  updatedAt?: string;                      // Fecha de actualización (opcional)
  deletedAt?: string | null;               // Fecha de eliminación (opcional, puede ser nulo)
  empleadoId:{                               // Objeto que representa la ficha
    id: number};                  // Objeto Empleado asociado a la ficha
  fichaId:{                               // Objeto que representa la ficha
    id: number,
    nombre?: string};                        // Objeto Ficha asociado al empleado
}
