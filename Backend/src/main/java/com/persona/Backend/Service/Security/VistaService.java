package com.persona.Backend.Service.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.persona.Backend.Entity.Security.Vista;
import com.persona.Backend.IRepository.Security.IVistaRepository;
import com.persona.Backend.IService.Security.IVistaService;
import com.persona.Backend.Service.BaseService;

@Service
public class VistaService extends BaseService<Vista> implements IVistaService{

	@Autowired
    private IVistaRepository vistaRepository;
	
	@Override
    public Vista findByNombre(String nombre) {
        return vistaRepository.findByNombre(nombre).orElse(null);
    }
	
}
