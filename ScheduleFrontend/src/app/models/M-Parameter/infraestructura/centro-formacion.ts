export interface CentroFormacion {
    id: number;
    state: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
    nombre: string;
    direccion: string;
    telefono: string;
    regionalId: {
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
    };
    ciudadId: {
      id: number;
      state: boolean;
      createdAt?: string;
      updatedAt?: string;
      deletedAt?: string | null;
      nombre: string;
      codigo: string;
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
    };
  }
  