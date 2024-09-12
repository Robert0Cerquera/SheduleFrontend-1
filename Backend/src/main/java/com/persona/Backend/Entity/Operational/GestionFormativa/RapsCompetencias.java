package com.persona.Backend.Entity.Operational.GestionFormativa;

import com.persona.Backend.Entity.BaseEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "raps_competencias")
public class RapsCompetencias extends BaseEntity {

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "rap_id", nullable = false, unique = false)
	private Rap rapId;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "competencia_id", nullable = false, unique = false)
	private Competencia competenciaId;

	public Rap getRapId() {
		return rapId;
	}

	public void setRapId(Rap rapId) {
		this.rapId = rapId;
	}

	public Competencia getCompetenciaId() {
		return competenciaId;
	}

	public void setCompetenciaId(Competencia competenciaId) {
		this.competenciaId = competenciaId;
	}
	
	
}
