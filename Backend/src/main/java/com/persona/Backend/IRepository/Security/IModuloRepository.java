package com.persona.Backend.IRepository.Security;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.persona.Backend.Dto.DataSelectDto;
import com.persona.Backend.Entity.Security.Modulo;
import com.persona.Backend.IRepository.IBaseRepository;

@Repository
public interface IModuloRepository extends IBaseRepository<Modulo, Long>{

	@Query(value = "select "
			+ "id, "
			+ "name as TextoMostrar "
			+ "From"
			+ "Modulo "
			+ "WHERE deleted_at is NULL AND estado=1 "
			+ "ORDER BY id ASC ", nativeQuery=true)
	Optional<DataSelectDto> SeleccionarDatos(Long id);
	
	
	 Optional<Modulo> findByNombre(String nombre);
}

