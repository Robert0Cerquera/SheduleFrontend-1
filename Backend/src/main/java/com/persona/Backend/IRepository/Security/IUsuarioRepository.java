package com.persona.Backend.IRepository.Security;

import java.util.Optional;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.persona.Backend.Dto.IDatosUsuarioDto;
import com.persona.Backend.Dto.ILoginDto;
import com.persona.Backend.Dto.Security.PermisosDto;
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
	
	@Query(value = "SELECT    "
			+ "			    u.id as userId,    "
			+ "			    u.state,  "
			+ "             u.contrasenia,  "
			+ "			    u.usuario_nombre,    "
			+ "			    COUNT(usuario_nombre) AS quantity    "
			+ "			 FROM    "
			+ "			    usuario u    "
			+ "			 WHERE    "
			+ "			    u.usuario_nombre = :user AND u.state = TRUE   "
			+ "			 GROUP BY  u.id, u.state, u.usuario_nombre ",nativeQuery = true)
	Optional<ILoginDto> getLogin(String user);
	
	@Query(value = "SELECT    "
			+ "					v.ruta vistaRuta,   "
			+ "					v.nombre vistaNombre,   "
			+ "					mo.ruta moduloRuta,   "
			+ "					mo.nombre moduloNombre,  "
			+ "					mo.icono,  "
			+ "					r.nombre as rol, "
			+ "					CONCAT(pe.primer_nombre, pe.segundo_nombre) as personaNombre  "
			+ "					   "
			+ "				FROM  persona pe  "
			+ "					INNER JOIN usuario u ON pe.id = u.persona_id   "
			+ "                 INNER JOIN usuarios_roles ur ON u.id = ur.usuario_id "
			+ "					INNER JOIN role r ON r.id = ur.role_id   "
			+ "					INNER JOIN vistas_roles vr ON vr.role_id = r.id   "
			+ "					INNER JOIN vista v ON v.id = vr.vista_id   "
			+ "					INNER JOIN modulo mo ON mo.id = v.modulo_id  "
			+ "				WHERE    "
			+ "					u.usuario_nombre = :user "
			+ "					AND u.state = TRUE   "
			+ "					AND r.state = TRUE   "
			+ "					AND v.state = TRUE   "
			+ "					AND mo.state = TRUE ", nativeQuery = true)
	List<PermisosDto> validarPermisos(String user);

	Optional<Usuario> findByUsuarioNombre(String usuario);
}
 