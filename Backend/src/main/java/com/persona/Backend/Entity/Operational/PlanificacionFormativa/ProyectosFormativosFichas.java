package com.persona.Backend.Entity.Operational.PlanificacionFormativa;

import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Entity.Operational.GestionHorario.Ficha;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "proyectos_formativos_fichas")
public class ProyectosFormativosFichas extends BaseEntity {

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "proyecto_formativo_id", nullable = false, unique = false)
	private ProyectoFormativo proyectoFormativoId;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "ficha_id", nullable = false, unique = false)
	private Ficha fichaId;

	public ProyectoFormativo getProyectoFormativoId() {
		return proyectoFormativoId;
	}

	public void setProyectoFormativoId(ProyectoFormativo proyectoFormativoId) {
		this.proyectoFormativoId = proyectoFormativoId;
	}

	public Ficha getFichaId() {
		return fichaId;
	}

	public void setFichaId(Ficha fichaId) {
		this.fichaId = fichaId;
	}

}
