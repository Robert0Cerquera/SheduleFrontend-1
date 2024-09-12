package com.persona.Backend.Entity.Operational.GestionHorario;

import java.time.LocalDateTime;

import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Entity.Operational.GestionFormativa.ProgramaFormacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="ficha")
public class Ficha extends BaseEntity{
	
	@Column(name = "codigo", length = 40, nullable = false)
	private String codigo;

	@Column(name = "fecha_inicio",  nullable = false)
	private LocalDateTime fechaInicio;
	
	@Column(name = "fecha_fin",  nullable = false)
	private LocalDateTime fechaFin;
	
	@Column(name = "cupo",  nullable = false)
	private Integer cupo;
	
	@Column(name = "etapa",  nullable = false)
	private String etapa;
	
	@OneToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "jornada_id", nullable = false, unique = false)
	private Jornada jornadaId;

	@OneToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "convocatoria_id", nullable = false, unique = false)
	private Convocatoria convocatoriaId;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "programa_formacion_id", nullable = false, unique = false)
	private ProgramaFormacion programaFormacionId;

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public LocalDateTime getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(LocalDateTime fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public LocalDateTime getFechaFin() {
		return fechaFin;
	}

	public void setFechaFin(LocalDateTime fechaFin) {
		this.fechaFin = fechaFin;
	}

	public Integer getCupo() {
		return cupo;
	}

	public void setCupo(Integer cupo) {
		this.cupo = cupo;
	}

	public String getEtapa() {
		return etapa;
	}

	public void setEtapa(String etapa) {
		this.etapa = etapa;
	}

	public Jornada getJornadaId() {
		return jornadaId;
	}

	public void setJornadaId(Jornada jornadaId) {
		this.jornadaId = jornadaId;
	}

	public Convocatoria getConvocatoriaId() {
		return convocatoriaId;
	}

	public void setConvocatoriaId(Convocatoria convocatoriaId) {
		this.convocatoriaId = convocatoriaId;
	}

	public ProgramaFormacion getProgramaFormacionId() {
		return programaFormacionId;
	}

	public void setProgramaFormacionId(ProgramaFormacion programaFormacionId) {
		this.programaFormacionId = programaFormacionId;
	}


}
