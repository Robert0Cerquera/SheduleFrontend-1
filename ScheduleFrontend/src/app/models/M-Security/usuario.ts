export interface Usuario {
  id: number;
  usuarioName: string;
  contrasenia: string;
  state: boolean;
  personaId: {
    id: number;
    primerNombre?: string;
    segundoNombre?: string;
    primerApellido?: string;
    segundoApellido?: string;
    email?: string;
  };
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}
