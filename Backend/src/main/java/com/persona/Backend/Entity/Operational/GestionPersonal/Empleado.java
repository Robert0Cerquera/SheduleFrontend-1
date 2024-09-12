package com.persona.Backend.Entity.Operational.GestionPersonal;

import java.time.LocalDate;

import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Entity.Security.Persona;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="empleado")
public class Empleado extends BaseEntity {
	
	@Column(name = "identificador", length = 45, nullable = false)
	private String identificador;

	@Column(name = "fecha_inicio", length = 45, nullable = false)
	private LocalDate fechaInicio;

	@Column(name = "fecha_fin", length = 45, nullable = false)
	private LocalDate fechaFin;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "cargo_id", nullable = false, unique = true)
	private Cargo cargoId;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "tipo_contrato_id", nullable = false, unique = false)
	private TipoContrato tipoContratoId;

	@OneToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "persona_id", nullable = false, unique = false)
	private Persona personaId;

	public String getIdentificador() {
		return identificador;
	}

	public void setIdentificador(String identificador) {
		this.identificador = identificador;
	}

	public LocalDate getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(LocalDate fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public LocalDate getFechaFin() {
		return fechaFin;
	}

	public void setFechaFin(LocalDate fechaFin) {
		this.fechaFin = fechaFin;
	}

	public Cargo getCargoId() {
		return cargoId;
	}

	public void setCargoId(Cargo cargoId) {
		this.cargoId = cargoId;
	}

	public TipoContrato getTipoContratoId() {
		return tipoContratoId;
	}

	public void setTipoContratoId(TipoContrato tipoContratoId) {
		this.tipoContratoId = tipoContratoId;
	}

	public Persona getPersonaId() {
		return personaId;
	}

	public void setPersonaId(Persona personaId) {
		this.personaId = personaId;
	}
	
	
}
