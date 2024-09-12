package com.persona.Backend.Entity.Operational.GestionFormativa;

import com.persona.Backend.Entity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="programa_formacion")
public class ProgramaFormacion extends BaseEntity{

	@Column(name = "nombre", length = 45, nullable = false)
	private String nombre;
	
	@Column(name = "descripcion", length = 45, nullable = false)
	private String descripcion;
	
	@Column(name = "duraccion", length = 45, nullable = false)
	private Integer duraccion;
	
	@OneToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "modalidad_id", nullable = false, unique = false)
	private Modalidad modalidadId;
	
	@OneToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "nivel_formacion_id", nullable = false, unique = false)
	private NivelFormacion nivelFormacionId;
	
	@OneToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "tipo_formacion_id", nullable = false, unique = false)
	private TipoFormacion tipoFormacionId;

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

	public Integer getDuraccion() {
		return duraccion;
	}

	public void setDuraccion(Integer duraccion) {
		this.duraccion = duraccion;
	}

	public Modalidad getModalidadId() {
		return modalidadId;
	}

	public void setModalidadId(Modalidad modalidadId) {
		this.modalidadId = modalidadId;
	}

	public NivelFormacion getNivelFormacionId() {
		return nivelFormacionId;
	}

	public void setNivelFormacionId(NivelFormacion nivelFormacionId) {
		this.nivelFormacionId = nivelFormacionId;
	}

	public TipoFormacion getTipoFormacionId() {
		return tipoFormacionId;
	}

	public void setTipoFormacionId(TipoFormacion tipoFormacionId) {
		this.tipoFormacionId = tipoFormacionId;
	}
	
}
