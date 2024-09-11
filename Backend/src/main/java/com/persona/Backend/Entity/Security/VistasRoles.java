package com.persona.Backend.Entity.Security;

import com.persona.Backend.Entity.BaseEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "vistas_roles")
public class VistasRoles extends BaseEntity {

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "vista_id", nullable = false, unique = true)
	private Vista vistaId;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "role_id", nullable = false, unique = true)
	private Role roleId;

	public Vista getVistaId() {
		return vistaId;
	}

	public void setVistaId(Vista vistaId) {
		this.vistaId = vistaId;
	}

	public Role getRoleId() {
		return roleId;
	}

	public void setRoleId(Role roleId) {
		this.roleId = roleId;
	}

}
