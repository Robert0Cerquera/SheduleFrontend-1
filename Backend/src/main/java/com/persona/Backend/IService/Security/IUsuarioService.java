package com.persona.Backend.IService.Security;


import java.util.List;
import java.util.Optional;

import com.persona.Backend.Dto.IDatosUsuarioDto;
import com.persona.Backend.Dto.Security.PermisosDto;
import com.persona.Backend.Entity.Security.Usuario;
import com.persona.Backend.IService.IBaseService;

public interface IUsuarioService extends IBaseService<Usuario>{
	
	Optional<IDatosUsuarioDto> ObtenerDatosUsuario(Long id);

	Usuario saveUsuarioJwt(Usuario instanceEntity) throws Exception;

	Boolean getLogin(String user, String password) throws Exception;
	
	List<PermisosDto> validarPermisos(String user);
}
