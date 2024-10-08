export interface RapsCompetencias {
  id: number;
  state: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  rapId: {
    id: number,
    nombre?: string
  };
  competenciaId: {
    id: number,
    nombre?: string
  };
}
