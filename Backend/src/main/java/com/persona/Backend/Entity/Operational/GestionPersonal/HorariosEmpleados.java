package com.persona.Backend.Entity.Operational.GestionPersonal;

import java.time.LocalDateTime;

import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Entity.Operational.GestionHorario.ProgramacionFicha;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "horario_empleado")
public class HorariosEmpleados extends BaseEntity {

	@Column(name = "hora_inicio", length = 45, nullable = false)
	private LocalDateTime horaInicio;

	@Column(name = "hora_fin", length = 45, nullable = false)
	private LocalDateTime horaFin;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "empleado_id", nullable = false, unique =false)
	private Empleado empleadoId;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "programacion_ficha_id", nullable = false, unique = false)
	private ProgramacionFicha programacionFichaId;

	public LocalDateTime getHoraInicio() {
		return horaInicio;
	}

	public void setHoraInicio(LocalDateTime horaInicio) {
		this.horaInicio = horaInicio;
	}

	public LocalDateTime getHoraFin() {
		return horaFin;
	}

	public void setHoraFin(LocalDateTime horaFin) {
		this.horaFin = horaFin;
	}

	public Empleado getEmpleadoId() {
		return empleadoId;
	}

	public void setEmpleadoId(Empleado empleadoId) {
		this.empleadoId = empleadoId;
	}

	public ProgramacionFicha getProgramacionFichaId() {
		return programacionFichaId;
	}

	public void setProgramacionFichaId(ProgramacionFicha programacionFichaId) {
		this.programacionFichaId = programacionFichaId;
	}

}
