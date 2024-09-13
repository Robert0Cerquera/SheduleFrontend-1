export interface Vista {
    id: number;
    nombre: string;
    descripcion?: string;
    ruta: string;
    moduloId: number; 
    state: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
  }
  