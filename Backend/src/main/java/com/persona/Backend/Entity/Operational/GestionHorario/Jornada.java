package com.persona.Backend.Entity.Operational.GestionHorario;

import com.persona.Backend.Entity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="jornada")
public class Jornada extends BaseEntity{

	@Column(name = "codigo", length = 40, nullable = false)
	private String codigo;

	@Column(name = "nombre",  nullable = false)
	private String nombre;

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
	
	
}
