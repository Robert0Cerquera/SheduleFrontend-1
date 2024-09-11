package com.persona.Backend.IRepository.Security;


import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.persona.Backend.Dto.IDatosUsuarioDto;
import com.persona.Backend.Dto.IValidarDatosUsuarioDto;
import com.persona.Backend.Entity.Security.Usuario;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface IUsuarioRepository extends IBaseRepository<Usuario, Long>{
	
	@Query(value = "select  "
			+ "p.primer_nombre, "
			+ "p.segundo_nombre, "
			+ "p.tipo_documento, "
			+ "p.numero_documento, "
			+ "p.telefono, "
			+ "p.email, "
			+ "u.usuario "
			+ "from  "
			+ "persona as p "
			+ "inner join usuario as u on p.id=u.persona_id "
			+ "where u.id = :id", nativeQuery=true)
			Optional<IDatosUsuarioDto> ObtenerDatosUsuario(Long id);

//	Forma 1 sin DTO
//	@Query(value="select "
//			+ "COUNT(u.usuario) "
//			+ "from "
//			+ "usuario as u "
//			+ "where "
//			+ "u.usuario = :usuario "
//			+ "and u.contrasenia = :contrasenia", nativeQuery=true)
//			Integer ValidarDatosUsuario(String usuario, String contrasenia);
	

	@Query(value="select "
			+ "COUNT(u.usuario) as cantidad "
			+ "from "
			+ "usuario as u "
			+ "where "
			+ "u.usuario = :usuario "
			+ "and u.contrasenia = :contrasenia", nativeQuery=true)
			Optional<IValidarDatosUsuarioDto> ValidarDatosUsuario(String usuario, String contrasenia);	
	
					
}
 