export interface VistasRoles {
    id: number;
    state: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
    vistaId: {
      id: number;
      nombre?: string;
      descripcion?: string;
      ruta?: string;
      moduloId?: {
        id: number;
        nombre?: string;
        ruta?: string;
        icono?: string;
      };
    };
    roleId: {
      id: number;
      nombre?: string;
      descripcion?: string;
    };
  }
  