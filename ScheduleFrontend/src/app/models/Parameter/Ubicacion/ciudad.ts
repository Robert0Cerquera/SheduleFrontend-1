import { Departamento } from './departamento';
export interface Ciudad {
    id: number;
    nombre: string;
    codigo: string;
    state: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
    departamentoId: Departamento; // Relación con Departamento
}
