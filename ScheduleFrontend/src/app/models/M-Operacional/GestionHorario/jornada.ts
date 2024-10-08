export interface Jornada {
    id: number;
    codigo: string;
    nombre: string;
    state: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
  }