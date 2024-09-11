package com.persona.Backend.IRepository.Parameter.Infraestructura;

import org.springframework.stereotype.Repository;

import com.persona.Backend.Entity.Parameter.Infraestrutura.CentroFormacion;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface ICentroFormacionRepository extends IBaseRepository<CentroFormacion, Long> {

}
