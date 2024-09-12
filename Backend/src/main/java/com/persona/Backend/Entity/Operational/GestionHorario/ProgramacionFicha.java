package com.persona.Backend.Entity.Operational.GestionHorario;

import java.time.LocalDate;
import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Entity.Enum.NumeroTrimestre;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="programacion_ficha")
public class ProgramacionFicha extends BaseEntity{

	@Column(name = "codigo", length = 40, nullable = false)
	private String codigo;

	@Column(name = "fecha_inicio",  nullable = false)
	private LocalDate fechaInicio;
	
	@Column(name = "fecha_fin",  nullable = false)
	private LocalDate fechaFin;
	
	@Column(name = "trimestre",  nullable = false)
	private NumeroTrimestre trimestre;
	
	@Column(name = "cantidad_hora",  nullable = false)
	private Integer cantidadHora;

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
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

	public NumeroTrimestre getTrimestre() {
		return trimestre;
	}

	public void setTrimestre(NumeroTrimestre trimestre) {
		this.trimestre = trimestre;
	}

	public Integer getCantidadHora() {
		return cantidadHora;
	}

	public void setCantidadHora(Integer cantidadHora) {
		this.cantidadHora = cantidadHora;
	}
	
	
	
}
