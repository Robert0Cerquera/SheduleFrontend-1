package com.persona.Backend.Entity.Security;

import com.persona.Backend.Entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "vista")
public class Vista extends BaseEntity {

	@Column(name = "nombre", length = 100, nullable = false, unique = true)
	private String nombre;

	@Column(name = "descripcion", length = 100, nullable = true)
	private String descripcion;

	@Column(name = "ruta", length = 70, nullable = false, unique= true)
	private String ruta;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "modulo_id", nullable = false, unique = false)
	private Modulo moduloId;

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

	public String getRuta() {
		return ruta;
	}

	public void setRuta(String ruta) {
		this.ruta = ruta;
	}

	public Modulo getModuloId() {
		return moduloId;
	}

	public void setModuloId(Modulo moduloId) {
		this.moduloId = moduloId;
	}

}
