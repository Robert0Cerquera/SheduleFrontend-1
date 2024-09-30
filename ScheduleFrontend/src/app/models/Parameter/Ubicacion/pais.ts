// models/Parameter/Ubicacion/pais.ts
export interface Pais {
    id: number;
    nombre: string;
    codigo: string;
    state: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
    continenteId: {
        id: number,
        nombre?: string
    };
  }
  