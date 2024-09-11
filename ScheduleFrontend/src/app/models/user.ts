import { Person } from "./person";

export interface User {
    id: number;
    usuario: string;
    contrasenia: string;
    personaId: {
        id: number
    }; 
    createdAt?: Date; // Fecha de creación
    updatedAt?: Date; // Fecha de actualización
    deletedAt?: Date | null; // Fecha de eliminación (puede ser null si no está eliminado)
}
