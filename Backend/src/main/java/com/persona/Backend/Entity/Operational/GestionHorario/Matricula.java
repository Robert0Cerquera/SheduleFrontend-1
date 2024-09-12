package com.persona.Backend.Entity.Operational.GestionHorario;

import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Entity.Enum.EstadoProceso;
import com.persona.Backend.Entity.Security.Persona;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="matricula")
public class Matricula extends BaseEntity {
	
	@Column(name = "estado_proceso", length = 40, nullable = false)
	private  EstadoProceso estadoProceso;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "persona_id", nullable = false, unique = false)
	private Persona personaId;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "ficha_id", nullable = false, unique = false)
	private Ficha fichaId;

	public EstadoProceso getEstadoProceso() {
		return estadoProceso;
	}

	public void setEstadoProceso(EstadoProceso estadoProceso) {
		this.estadoProceso = estadoProceso;
	}

	public Persona getPersonaId() {
		return personaId;
	}

	public void setPersonaId(Persona personaId) {
		this.personaId = personaId;
	}

	public Ficha getFichaId() {
		return fichaId;
	}

	public void setFichaId(Ficha fichaId) {
		this.fichaId = fichaId;
	}
	
	
}
