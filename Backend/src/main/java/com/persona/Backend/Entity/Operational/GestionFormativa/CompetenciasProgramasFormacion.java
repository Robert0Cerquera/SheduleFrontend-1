package com.persona.Backend.Entity.Operational.GestionFormativa;

import com.persona.Backend.Entity.BaseEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "competencias_programas_formacion")
public class CompetenciasProgramasFormacion extends BaseEntity {

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "programa_formacion_id", nullable = false, unique =false)
	private ProgramaFormacion programaFormacionId;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "competencia_id", nullable = false, unique = false)
	private Competencia competenciaId;

	public ProgramaFormacion getProgramaFormacionId() {
		return programaFormacionId;
	}

	public void setProgramaFormacionId(ProgramaFormacion programaFormacionId) {
		this.programaFormacionId = programaFormacionId;
	}

	public Competencia getCompetenciaId() {
		return competenciaId;
	}

	public void setCompetenciaId(Competencia competenciaId) {
		this.competenciaId = competenciaId;
	}
}
