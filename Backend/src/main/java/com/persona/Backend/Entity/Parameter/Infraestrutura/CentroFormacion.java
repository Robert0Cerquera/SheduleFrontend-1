package com.persona.Backend.Entity.Parameter.Infraestrutura;

import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Entity.Parameter.Ubicacion.Ciudad;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "centro_formacion")
public class CentroFormacion extends BaseEntity {


	@Column(name = "nombre", length = 45, nullable = false)
	private String nombre;

	@Column(name = "acronimo", length = 10, nullable = false)
	private String acronimo;

	@Column(name = "direccion", length = 45, nullable = false)
	private String direccion;

	@Column(name = "telefono", length = 15, nullable = false)
	private String telefono;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "regional_id", nullable = false, unique = false)
	private Regional regionalId;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "cuidad_id", nullable = false, unique = false)
	private Ciudad ciudadId;

	
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getAcronimo() {
		return acronimo;
	}

	public void setAcronimo(String acronimo) {
		this.acronimo = acronimo;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public Regional getRegionalId() {
		return regionalId;
	}

	public void setRegionalId(Regional regionalId) {
		this.regionalId = regionalId;
	}

	public Ciudad getCiudadId() {
		return ciudadId;
	}

	public void setCiudadId(Ciudad ciudadId) {
		this.ciudadId = ciudadId;
	}

}
