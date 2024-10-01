export interface Vista {
  id: number;
  nombre: string;
  descripcion: string;
  ruta: string;
  state: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  moduloId: {
    id: number;
    nombre?: string;
    ruta?: string;
    icono?: string;
  };
}