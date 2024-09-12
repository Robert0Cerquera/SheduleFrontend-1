package com.persona.Backend.Entity.Parameter.Infraestrutura;

import com.persona.Backend.Entity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "especialidad")
public class Especialidad extends BaseEntity {

	@Column(name = "codigo", length = 10, nullable = false)
	private String codigo;

	@Column(name = "nombre", length = 45, nullable = false)
	private String nombre;

	@Column(name = "descripcion", length = 65, nullable = false)
	private String descripcion;

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

}
