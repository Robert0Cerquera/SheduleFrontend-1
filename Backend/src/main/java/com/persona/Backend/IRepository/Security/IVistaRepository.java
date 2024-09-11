package com.persona.Backend.IRepository.Security;

import org.springframework.stereotype.Repository;

import com.persona.Backend.Entity.Security.Vista;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface IVistaRepository extends IBaseRepository<Vista, Long> {

}
