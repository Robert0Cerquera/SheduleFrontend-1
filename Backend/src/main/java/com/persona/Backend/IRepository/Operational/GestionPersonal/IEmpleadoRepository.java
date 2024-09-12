package com.persona.Backend.IRepository.Operational.GestionPersonal;

import org.springframework.stereotype.Repository;

import com.persona.Backend.Entity.Operational.GestionPersonal.Empleado;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface IEmpleadoRepository extends IBaseRepository<Empleado, Long> {

}
