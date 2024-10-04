package com.persona.Backend.Service.Security;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.persona.Backend.Entity.Security.Modulo;
import com.persona.Backend.IRepository.Security.IModuloRepository;
import com.persona.Backend.IService.Security.IModuloService;
import com.persona.Backend.Service.BaseService;

@Service
public class ModuloService extends BaseService<Modulo> implements IModuloService {
	
	 @Autowired
	    private IModuloRepository moduloRepository;
	
	 @Override
	    public Modulo findByNombre(String nombre) {
	        return moduloRepository.findByNombre(nombre).orElse(null);
	    }

	
	
	
}
