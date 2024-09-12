package com.persona.Backend.Entity.Parameter.Infraestrutura;

import com.persona.Backend.Entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ambiente")
public class Ambiente extends BaseEntity {

	@Column(name = "codigo", length = 45, nullable = false)
	private String codigo;

	@Column(name = "nombre", length = 45, nullable = false)
	private String nombre;

	@Column(name = "cupo", length = 45, nullable = false)
	private Integer cupo;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "piso_id", nullable = false, unique = false)
	private Piso pisoId;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "especialidad_id", nullable = false, unique = false)
	private Especialidad especialidadId;

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

	public Integer getCupo() {
		return cupo;
	}

	public void setCupo(Integer cupo) {
		this.cupo = cupo;
	}

	public Especialidad getEspecialidadId() {
		return especialidadId;
	}

	public void setEspecialidadId(Especialidad especialidadId) {
		this.especialidadId = especialidadId;
	}

}
