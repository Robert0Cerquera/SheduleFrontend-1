export interface Person {
    id: number;
    primerNombre: string;
    segundoNombre: string;
    tipoDocumento: string;
    numeroDocumento: string;
    telefono: string;
    email: string;
    primerApellido: string;
    segundoApellido: string;
    direccion: string;
    fechaNacimiento: string; 
    genero: string;
    state: boolean; 
    createdAt: string; 
    updatedAt: string;
    deletedAt?: string | null; 
}