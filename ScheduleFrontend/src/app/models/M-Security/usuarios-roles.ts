export interface UsuariosRoles {
    id: number;
    state: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
    usuarioId: {
      id: number;
      usuarioName: string;
      personaId: {
        id: number;
        primerNombre: string;
        segundoNombre?: string;
        primerApellido: string;
        segundoApellido?: string;
      };
    };
    roleId: {
      id: number;
      nombre: string;
      descripcion?: string;
    };
  }
  