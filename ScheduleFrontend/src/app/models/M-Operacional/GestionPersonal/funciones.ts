export interface Funciones {
  id: number;                              // Identificador único de la función
  state: boolean;                          // Estado de la función
  createdAt?: string;                      // Fecha de creación (opcional)
  updatedAt?: string;                      // Fecha de actualización (opcional)
  deletedAt?: string | null;               // Fecha de eliminación (opcional, puede ser nulo)
  codigo: string;                          // Código de la función
  nombre: string;                          // Nombre de la función
  descripcion: string;                     // Descripción de la función
  proyectoFormativoId: {                     // Objeto que representa el centro de formación
    id: number,
    nombre?: string;       // Objeto ProyectoFormativo asociado a la función
}
}
