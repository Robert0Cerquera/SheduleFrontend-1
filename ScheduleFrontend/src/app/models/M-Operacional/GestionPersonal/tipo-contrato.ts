export interface TipoContrato {
  id: number;                  // Identificador único del contrato
  state: boolean;              // Estado del contrato
  createdAt?: string;          // Fecha de creación (opcional)
  updatedAt?: string;          // Fecha de actualización (opcional)
  deletedAt?: string | null;   // Fecha de eliminación (opcional, puede ser nulo)
  codigo: string;              // Código del tipo de contrato
  nombre: string;              // Nombre del tipo de contrato
  cantidadHora:{                     // Objeto que representa el centro de formación
    id: number,
    nombre?: string;            // Cantidad de horas asociadas al tipo de contrato
  }
}
