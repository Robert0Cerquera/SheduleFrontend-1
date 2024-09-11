package com.persona.Backend.Entity.Parameter.Ubicacion;

import com.persona.Backend.Entity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "departamento")
public class Departamento extends BaseEntity {

	@Column(name = "nombre", length = 45, nullable = false)
	private String nombre;

	@Column(name = "codigo", length = 45, nullable = false)
	private String codigo;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "pais_id", nullable = false, unique = true)
	private Pais paisId;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public Pais getPaisId() {
		return paisId;
	}

	public void setPaisId(Pais paisId) {
		this.paisId = paisId;
	}

}
