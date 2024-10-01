export interface Role {
  id: number;
  nombre: string;
  descripcion: string;
  state: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}