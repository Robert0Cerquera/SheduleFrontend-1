package com.persona.Backend.IRepository.Operational.GestionHorario;

import org.springframework.stereotype.Repository;

import com.persona.Backend.Entity.Operational.GestionHorario.Matricula;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface IMatriculaRepository extends IBaseRepository<Matricula, Long> {

}
