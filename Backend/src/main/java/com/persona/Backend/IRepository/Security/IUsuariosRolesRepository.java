package com.persona.Backend.IRepository.Security;

import org.springframework.stereotype.Repository;

import com.persona.Backend.Entity.Security.UsuariosRoles;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface IUsuariosRolesRepository extends IBaseRepository<UsuariosRoles, Long>{

}
