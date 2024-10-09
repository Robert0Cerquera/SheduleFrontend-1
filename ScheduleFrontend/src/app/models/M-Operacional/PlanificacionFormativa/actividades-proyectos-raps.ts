export interface ActividadProyecto {
  id: number; // ID de la entidad base
  codigo: string; // Código de la actividad
  nombre: string; // Nombre de la actividad
  descripcion: string; // Descripción de la actividad
  faseId: {                     // Objeto que representa el centro de formación
    id: number,
    nombre?: string;      // Relación con la entidad Fase
  }
}
