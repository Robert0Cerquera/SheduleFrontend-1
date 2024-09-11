package com.persona.Backend.IRepository.Security;


import org.springframework.stereotype.Repository;

import com.persona.Backend.Entity.Security.Persona;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface IPersonaRepository extends IBaseRepository<Persona, Long>{

	
}
