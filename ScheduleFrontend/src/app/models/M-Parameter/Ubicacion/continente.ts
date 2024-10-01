export interface Continente {
  id: number;
  state?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  nombre: string;
  codigo?: string;
}
