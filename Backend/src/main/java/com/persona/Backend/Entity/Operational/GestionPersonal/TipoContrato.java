package com.persona.Backend.Entity.Operational.GestionPersonal;

import com.persona.Backend.Entity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="tipo_contrato")
public class TipoContrato extends BaseEntity {

	@Column(name = "codigo", length = 45, nullable = false)
	private String codigo;

	@Column(name = "nombre", length = 45, nullable = false)
	private String nombre;

	@Column(name = "cantidad_hora", nullable = false)
	private Integer cantidadHora;

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

	public Integer getCantidadHora() {
		return cantidadHora;
	}

	public void setCantidadHora(Integer cantidadHora) {
		this.cantidadHora = cantidadHora;
	}
	
	
}
