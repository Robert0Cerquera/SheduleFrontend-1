package com.persona.Backend.Controller.Security;

import java.util.Optional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.persona.Backend.Controller.BaseController;
import com.persona.Backend.Dto.IDatosUsuarioDto;
import com.persona.Backend.Dto.Security.PermisosDto;
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

	@GetMapping("/UsuarioJwt")
	public Usuario saveUsuarioJwt(@RequestBody Usuario instanceEntity) throws Exception {
		return service.saveUsuarioJwt(instanceEntity);
	}
	
	@GetMapping("/validar/datos")
	public Boolean getLogin(@RequestParam String user, String password) throws Exception{
		return service.getLogin(user, password);
	}
	  
	@GetMapping("/validar/permisos")
	public List<PermisosDto> validarPermisos(@RequestParam String User){
		return service.validarPermisos(User);
	}
}
