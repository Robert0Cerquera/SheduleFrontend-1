export interface ProyectoFormativo {
  id: number;                              // Identificador único del proyecto formativo
  state: boolean;                          // Estado del proyecto formativo
  createdAt?: string;                      // Fecha de creación (opcional)
  updatedAt?: string;                      // Fecha de actualización (opcional)
  deletedAt?: string | null;               // Fecha de eliminación (opcional, puede ser nulo)
  titulo: string;                          // Título del proyecto formativo
  codigo: string;                          // Código del proyecto formativo
  descripcion: string;                     // Descripción del proyecto formativo
  cantidadRap: number;                     // Cantidad de RAP del proyecto formativo
  centroFormacionId: {                     // Objeto que representa el centro de formación
    id: number,
    nombre?: string;                           // Identificador único del centro de formación
    // Otros campos del centro de formación, si es necesario
  };
}
