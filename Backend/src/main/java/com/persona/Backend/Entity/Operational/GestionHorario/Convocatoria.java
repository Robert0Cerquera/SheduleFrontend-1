package com.persona.Backend.Entity.Operational.GestionHorario;

import java.time.Year;

import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Entity.Enum.NumeroTrimestre;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="convocatoria")
public class Convocatoria extends BaseEntity {

	@Column(name = "codigo", length = 40, nullable = false)
	private String codigo;

	@Column(name = "anio",  nullable = false)
	private Year anio;
	
	@Column(name = "trimestre",  nullable = false)
	private NumeroTrimestre trimestre;

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public Year getAnio() {
		return anio;
	}

	public void setAnio(Year anio) {
		this.anio = anio;
	}

	public NumeroTrimestre getTrimestre() {
		return trimestre;
	}

	public void setTrimestre(NumeroTrimestre trimestre) {
		this.trimestre = trimestre;
	}

	
	
	
}
