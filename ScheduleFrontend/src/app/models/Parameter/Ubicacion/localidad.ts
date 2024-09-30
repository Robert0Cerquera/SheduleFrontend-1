import { Ciudad } from './ciudad';
export interface Localidad {
    id: number;
    nombre: string;
    codigoPostal: number;
    state: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
    ciudadId: Ciudad; // Relación con Ciudad
}
