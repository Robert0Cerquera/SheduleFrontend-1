package com.persona.Backend.Entity.Security;

import com.persona.Backend.Entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "modulo")
public class Modulo extends BaseEntity {

	@Column(name = "nombre", length = 45, nullable = false, unique=true)
	private String nombre;
	
	@Column(name = "ruta", length = 45, nullable = false)
	private String ruta;
	
	@Column(name = "icono", length = 45, nullable = false)
	private String icono;
	
	@ManyToOne
    @JoinColumn(name = "padre_id", nullable = true)
    private Modulo padreId;

	

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getRuta() {
		return ruta;
	}

	public void setRuta(String ruta) {
		this.ruta = ruta;
	}

	public String getIcono() {
		return icono;
	}

	public void setIcono(String icono) {
		this.icono = icono;
	}

	

}
