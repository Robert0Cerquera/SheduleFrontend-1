package com.persona.Backend.Entity.Parameter.Ubicacion;

import com.persona.Backend.Entity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "localidad")
public class Localidad extends BaseEntity {

	@Column(name = "nombre", length = 45, nullable = false)
	private String nombre;

	@Column(name = "codigo_postal", length = 45, nullable = false)
	private Integer codigoPostal;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "ciudad_id", nullable = false, unique = false)
	private Ciudad ciudadId;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Integer getCodigoPostal() {
		return codigoPostal;
	}

	public void setCodigoPostal(Integer codigoPostal) {
		this.codigoPostal = codigoPostal;
	}

	public Ciudad getCiudadId() {
		return ciudadId;
	}

	public void setCiudadId(Ciudad ciudadId) {
		this.ciudadId = ciudadId;
	}

}