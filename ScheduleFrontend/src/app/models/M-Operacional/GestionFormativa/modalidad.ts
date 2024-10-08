export interface Modalidad {
  id: number;
  codigo: string;
  nombre: string;
  descripcion:string;
  requierePresencialidad:string;
  state: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}
