package com.persona.Backend.Service.Security;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.persona.Backend.Dto.IDatosUsuarioDto;
import com.persona.Backend.Dto.IValidarDatosUsuarioDto;
import com.persona.Backend.Entity.Security.Usuario;
import com.persona.Backend.IRepository.Security.IUsuarioRepository;
import com.persona.Backend.IService.Security.IUsuarioService;
import com.persona.Backend.Service.BaseService;

@Service
public class UsuarioService extends BaseService<Usuario> implements IUsuarioService {

	@Autowired
	private IUsuarioRepository repository;

	@Override
	public Optional<IDatosUsuarioDto> ObtenerDatosUsuario(Long id) {
		return repository.ObtenerDatosUsuario(id);
	}

	@Override
	public Optional<IValidarDatosUsuarioDto> ValidarDatosUsuario(String usuario, String contrasenia) {
		return repository.ValidarDatosUsuario(usuario, contrasenia);
		
	}

// Forma sin DTO
//	@Override
//	public Boolean ValidarDatosUsuario(String usuario, String contrasenia) {
//		Integer variable = repository.ValidarDatosUsuario(usuario, contrasenia);
//
//		if (variable == 1) {
//			return true;
//		} else {
//			return false;
//		}
//	}
	

}
