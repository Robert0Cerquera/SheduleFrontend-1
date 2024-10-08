export interface CompetenciasProgramasFormacion {
  id: number;
  state: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  programaFormacionId: {
    id: number,
    nombre?: string
  };
  competenciaId: {
    id: number,
    nombre?: string
  };

}
