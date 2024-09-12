package com.persona.Backend.IRepository.Operational.GestionFormativa;

import org.springframework.stereotype.Repository;

import com.persona.Backend.Entity.Operational.GestionFormativa.TipoFormacion;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface ITipoFormacionRepository extends IBaseRepository<TipoFormacion, Long> {

}
