package com.persona.Backend.IRepository.Security;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.persona.Backend.Entity.Security.Role;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface IRoleRepository extends IBaseRepository<Role, Long>{

	Optional<Role> findByNombre(String nombre);
}
