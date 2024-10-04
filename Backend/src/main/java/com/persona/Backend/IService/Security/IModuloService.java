package com.persona.Backend.IService.Security;

import com.persona.Backend.Entity.Security.Modulo;
import com.persona.Backend.IService.IBaseService;

public interface IModuloService extends IBaseService<Modulo> {

	Modulo findByNombre(String nombre);
}
