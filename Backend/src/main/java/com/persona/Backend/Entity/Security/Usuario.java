package com.persona.Backend.Entity.Security;

import com.persona.Backend.Entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario")
public class Usuario extends BaseEntity {

	@Column(name = "usuario_nombre", length = 40, nullable = false)
	private String usuarioNombre;

	@Column(name = "contrasenia", length = 40, nullable = false)
	private String contrasenia;

	@OneToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "persona_id", nullable = false, unique = false)
	private Persona personaId;

	

	public String getUsuarioName() {
		return usuarioNombre;
	}

	public void setUsuarioName(String usuarioName) {
		this.usuarioNombre = usuarioName;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}

	public Persona getPersonaId() {
		return personaId;
	}

	public void setPersonaId(Persona personaId) {
		this.personaId = personaId;
	}

}
