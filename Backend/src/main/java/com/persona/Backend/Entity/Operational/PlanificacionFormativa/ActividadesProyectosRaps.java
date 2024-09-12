package com.persona.Backend.Entity.Operational.PlanificacionFormativa;

import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Entity.Operational.GestionFormativa.Rap;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "actividades_proyectos_raps")
public class ActividadesProyectosRaps extends BaseEntity {

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "actividad_proyecto_id", nullable = false, unique = false)
	private ActividadProyecto actividadProyectoId;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "rap_id", nullable = false, unique = false)
	private Rap rapId;

	public ActividadProyecto getActividadProyectoId() {
		return actividadProyectoId;
	}

	public void setActividadProyectoId(ActividadProyecto actividadProyectoId) {
		this.actividadProyectoId = actividadProyectoId;
	}

	public Rap getRapId() {
		return rapId;
	}

	public void setRapId(Rap rapId) {
		this.rapId = rapId;
	}

}
