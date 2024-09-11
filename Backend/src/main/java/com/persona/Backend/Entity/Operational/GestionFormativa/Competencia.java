package com.persona.Backend.Entity.Operational.GestionFormativa;

import com.persona.Backend.Entity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="competencia")
public class Competencia extends BaseEntity{
	
	@Column(name = "codigo", length = 45, nullable = false)
	private String codigo;

	@Column(name = "nombre", length = 45, nullable = false)
	private String nombre;
	
	@Column(name = "descripcion", length = 45, nullable = false)
	private String descripcion;
	
	@Column(name = "duraccion", length = 45, nullable = false)
	private Integer duraccion;

}
