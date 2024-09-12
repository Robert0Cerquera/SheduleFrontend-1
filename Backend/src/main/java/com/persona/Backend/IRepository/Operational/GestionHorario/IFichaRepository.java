package com.persona.Backend.IRepository.Operational.GestionHorario;

import org.springframework.stereotype.Repository;

import com.persona.Backend.Entity.Operational.GestionHorario.Ficha;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface IFichaRepository extends IBaseRepository<Ficha, Long> {

}
