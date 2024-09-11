package com.persona.Backend.Entity.Parameter.Infraestrutura;

import com.persona.Backend.Entity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "sede")
public class Sede extends BaseEntity {

	@Column(name = "codigo", length = 45, nullable = false)
	private String codigo;

	@Column(name = "nombre", length = 45, nullable = false)
	private String nombre;

	@Column(name = "direccion", length = 45, nullable = false)
	private String direccion;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "centro_formacion_id", nullable = false, unique = true)
	private CentroFormacion centroFormacionId;

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

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public CentroFormacion getCentroFormacionId() {
		return centroFormacionId;
	}

	public void setCentroFormacionId(CentroFormacion centroFormacionId) {
		this.centroFormacionId = centroFormacionId;
	}

}
