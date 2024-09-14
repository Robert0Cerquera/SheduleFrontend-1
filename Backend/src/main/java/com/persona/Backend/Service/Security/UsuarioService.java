package com.persona.Backend.Service.Security;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.persona.Backend.Dto.IDatosUsuarioDto;
import com.persona.Backend.Dto.ILoginDto;
import com.persona.Backend.Dto.Security.PermisosDto;
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
	public Usuario saveUsuarioJwt(Usuario instanceEntity) throws Exception {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String encodedPassword = passwordEncoder.encode(instanceEntity.getContrasenia());
		instanceEntity.setContrasenia(encodedPassword);
		return repository.save(instanceEntity);
	}

	@Override
	public Boolean getLogin(String user, String password) throws Exception {
	    Optional<ILoginDto> datosUsuario = repository.getLogin(user);
	    
	    // Verificar si el Optional tiene un valor presente
	    if (datosUsuario.isPresent()) {
	        // Validar usuario y contraseña
	        if (user.equals(datosUsuario.get().getUsuarioNombre()) &&
	            password.equals(datosUsuario.get().getContrasenia())) {
	            return true;
	        } else if (!password.equals(datosUsuario.get().getContrasenia())) {
	            throw new Exception("La contraseña es incorrecta");
	        }
	    } else {
	        // Lanzar excepción si no se encuentra el usuario
	        throw new Exception("Usuario no encontrado");
	    }
	    
	    return false;
	}

	@Override
	public List<PermisosDto> validarPermisos(String user) {
		return repository.validarPermisos(user);
	}


}
