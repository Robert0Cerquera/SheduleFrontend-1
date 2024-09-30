export interface Departamento {
  id: number;
  nombre: string;
  codigo: string;
  state: boolean;
  createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
  paisId: {
    id: number,
    nombre?: string
  };
}