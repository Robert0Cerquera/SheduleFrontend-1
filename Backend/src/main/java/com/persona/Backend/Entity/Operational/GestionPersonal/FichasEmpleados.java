package com.persona.Backend.Entity.Operational.GestionPersonal;

import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Entity.Operational.GestionHorario.Ficha;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "fichas_empleados")
public class FichasEmpleados extends BaseEntity {

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "empleado_id", nullable = false, unique = false)
	private Empleado empleadoId;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "ficha_id", nullable = false, unique = false)
	private Ficha fichaId;

	public Empleado getEmpleadoId() {
		return empleadoId;
	}

	public void setEmpleadoId(Empleado empleadoId) {
		this.empleadoId = empleadoId;
	}

	public Ficha getFichaId() {
		return fichaId;
	}

	public void setFichaId(Ficha fichaId) {
		this.fichaId = fichaId;
	}

}
