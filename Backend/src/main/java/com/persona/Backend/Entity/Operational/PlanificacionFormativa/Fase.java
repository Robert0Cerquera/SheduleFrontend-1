package com.persona.Backend.Entity.Operational.PlanificacionFormativa;

import com.persona.Backend.Entity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "fase")
public class Fase extends BaseEntity {

	@Column(name = "codigo", length = 45, nullable = false)
	private String codigo;

	@Column(name = "nombre", length = 45, nullable = false)
	private String nombre;

	@Column(name = "descripcion", length = 45, nullable = false)
	private String descripcion;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "proyecto_formativo_id", nullable = false, unique = false)
	private ProyectoFormativo proyectoFormativoId;

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public ProyectoFormativo getProyectoFormativoId() {
		return proyectoFormativoId;
	}

	public void setProyectoFormativoId(ProyectoFormativo proyectoFormativoId) {
		this.proyectoFormativoId = proyectoFormativoId;
	}

}
