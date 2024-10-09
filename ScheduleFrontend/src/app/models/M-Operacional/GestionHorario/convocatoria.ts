export interface Convocatoria {
  id: number;                         // Identificador único de la convocatoria
  state: boolean;                     // Estado de la convocatoria
  createdAt?: string;                 // Fecha de creación (opcional)
  updatedAt?: string;                 // Fecha de actualización (opcional)
  deletedAt?: string | null;          // Fecha de eliminación (opcional, puede ser nulo)
  codigo: string;                     // Código de la convocatoria
  anio: number;                       // Año de la convocatoria (almacenado como número)
  trimestre: string;                  // Trimestre de la convocatoria (almacenado como string o enum)
}
