export interface Cargo {
  id: number;                              // Identificador único del cargo
  state: boolean;                          // Estado del cargo
  createdAt?: string;                      // Fecha de creación (opcional)
  updatedAt?: string;                      // Fecha de actualización (opcional)
  deletedAt?: string | null;               // Fecha de eliminación (opcional, puede ser nulo)
  codigo: string;                          // Código del cargo
  nombre: string;                          // Nombre del cargo
  descripcion: string;                     // Descripción del cargo
}
