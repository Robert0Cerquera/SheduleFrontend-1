package com.persona.Backend.Controller.Security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.persona.Backend.Controller.BaseController;
import com.persona.Backend.Dto.IDatosUsuarioDto;
import com.persona.Backend.Dto.IValidarDatosUsuarioDto;
import com.persona.Backend.Entity.Security.Usuario;
import com.persona.Backend.Service.Security.UsuarioService;

@CrossOrigin("*")//permite que cualquier dominio tenga acceso a el
@RestController
@RequestMapping("/api/v1/base/security/usuario")
public class UsuarioController extends BaseController<Usuario> {

	@Autowired
	private UsuarioService service;

	@GetMapping("/datos/usuario/{id}")
	Optional<IDatosUsuarioDto> ObtenerDatosUsuario(@PathVariable Long id){
		return service.ObtenerDatosUsuario(id);
	}

	//Forma sin el DTO
  //	@GetMapping("/validar/datos")
//	Boolean ValidarDatosUsuario(@RequestParam String usuario,@RequestParam String contrasenia) {
//	return service.ValidarDatosUsuario(usuario, contrasenia);
//	}
	
	@GetMapping("/validar/datos")
	Optional<IValidarDatosUsuarioDto> ValidarDatosUsuario(String usuario, String contrasenia){
		return service.ValidarDatosUsuario(usuario, contrasenia);
	}
	
	
	  
	
}
