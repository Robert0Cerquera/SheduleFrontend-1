package com.persona.Backend.Service.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.persona.Backend.Entity.Security.Role;
import com.persona.Backend.IRepository.Security.IRoleRepository;
import com.persona.Backend.IService.Security.IRoleService;
import com.persona.Backend.Service.BaseService;

@Service
public class RoleService extends BaseService<Role> implements IRoleService{
	
	 @Autowired
	 private IRoleRepository roleRepository;

	@Override
	public Role findByNombre(String nombre) {
		return roleRepository.findByNombre(nombre).orElse(null);
	}

}
