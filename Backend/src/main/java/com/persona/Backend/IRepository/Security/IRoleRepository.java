package com.persona.Backend.IRepository.Security;

import org.springframework.stereotype.Repository;

import com.persona.Backend.Entity.Security.Role;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface IRoleRepository extends IBaseRepository<Role, Long>{

}
