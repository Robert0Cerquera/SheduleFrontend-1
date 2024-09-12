package com.persona.Backend.Entity.Operational.PlanificacionFormativa;

import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Entity.Parameter.Infraestrutura.CentroFormacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "proyecto_formativo")
public class ProyectoFormativo extends BaseEntity {

	@Column(name = "titulo", length = 45, nullable = false)
	private String titulo;

	@Column(name = "codigo", length = 45, nullable = false)
	private String codigo;

	@Column(name = "descripcion", length = 100, nullable = false)
	private String descripcion;

	@Column(name = "cantidad_rap", nullable = false)
	private Integer cantidadRap;

	@OneToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "centro_formacion_id", nullable = false, unique = false)
	private CentroFormacion centroFormacionId;

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Integer getCantidadRap() {
		return cantidadRap;
	}

	public void setCantidadRap(Integer cantidadRap) {
		this.cantidadRap = cantidadRap;
	}

	public CentroFormacion getCentroFormacionId() {
		return centroFormacionId;
	}

	public void setCentroFormacionId(CentroFormacion centroFormacionId) {
		this.centroFormacionId = centroFormacionId;
	}

}
