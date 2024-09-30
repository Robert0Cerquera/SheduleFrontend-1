export interface Modulo {
  id: number;
  nombre: string;
  ruta: string;
  icono: string;
  state: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}