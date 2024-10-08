export interface Competencia {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  duraccion: string;
  state: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}
