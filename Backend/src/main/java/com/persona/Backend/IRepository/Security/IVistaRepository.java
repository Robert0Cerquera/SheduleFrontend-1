package com.persona.Backend.IRepository.Security;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.persona.Backend.Entity.Security.Vista;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface IVistaRepository extends IBaseRepository<Vista, Long> {
	
	Optional<Vista> findByNombre(String nombre);

}
