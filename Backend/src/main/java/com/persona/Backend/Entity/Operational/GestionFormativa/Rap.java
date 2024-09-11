package com.persona.Backend.Entity.Operational.GestionFormativa;

import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Entity.Enum.NivelRap;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Table;

@Entity
@Table(name = "rap")
public class Rap extends BaseEntity {

	@Column(name = "descripcion", length = 45, nullable = false)
	private String descripcion;

	@Column(name = "duraccion", length = 45, nullable = false)
	private Integer duraccion;

	@Column(name = "nivel", length = 45, nullable = false)
	private NivelRap nivel;

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Integer getDuraccion() {
		return duraccion;
	}

	public void setDuraccion(Integer duraccion) {
		this.duraccion = duraccion;
	}

	public NivelRap getNivel() {
		return nivel;
	}

	public void setNivel(NivelRap nivel) {
		this.nivel = nivel;
	}

}
