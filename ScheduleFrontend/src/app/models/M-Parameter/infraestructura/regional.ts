export interface Regional {
    id: number;
    state: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
    nit: string;
    nombre: string;
    acronimo: string;
    direccion: string;
    telefono: string;
    departamentoId: {
      id: number;
      state: boolean;
      createdAt?: string;
      updatedAt?: string;
      deletedAt?: string | null;
      nombre: string;
      codigo: string;
      paisId: {
        id: number;
        state: boolean;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string | null;
        nombre: string;
        codigo: string;
        continenteId: {
          id: number;
          state: boolean;
          createdAt?: string;
          updatedAt?: string;
          deletedAt?: string | null;
          nombre: string;
          codigo: string;
        };
      };
    };
  }
  