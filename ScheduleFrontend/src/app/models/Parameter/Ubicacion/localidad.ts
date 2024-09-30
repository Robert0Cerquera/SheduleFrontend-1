export interface Localidad {
    id: number;
    nombre: string;
    codigoPostal: number;
    state: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
    
    ciudadId: {
      id: number,
      nombre?: string
    };
  }