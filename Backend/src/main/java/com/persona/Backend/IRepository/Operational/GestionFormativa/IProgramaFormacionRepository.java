package com.persona.Backend.IRepository.Operational.GestionFormativa;

import org.springframework.stereotype.Repository;

import com.persona.Backend.Entity.Operational.GestionFormativa.ProgramaFormacion;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface IProgramaFormacionRepository extends IBaseRepository<ProgramaFormacion, Long> {

}
