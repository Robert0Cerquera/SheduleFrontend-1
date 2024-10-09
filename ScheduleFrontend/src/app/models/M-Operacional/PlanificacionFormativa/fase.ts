export interface Fase {
  id: number; // ID de la entidad base
  codigo: string; // Código de la fase
  nombre: string; // Nombre de la fase
  descripcion: string; // Descripción de la fase
  proyectoFormativoId: {                     // Objeto que representa el centro de formación
    id: number,
    nombre?: string;     // Relación con la entidad ProyectoFormativo
  }
}
