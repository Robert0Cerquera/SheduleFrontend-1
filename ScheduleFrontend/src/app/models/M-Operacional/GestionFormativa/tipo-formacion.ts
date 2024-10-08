export interface TipoFormacion {
  id: number;
  codigo:string;
  nombre:string;
  descripcion:string;
  state: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}
