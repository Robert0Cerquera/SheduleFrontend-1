package com.persona.Backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import com.persona.Backend.Service.BaseService;
import com.persona.Backend.Utils.ApiResponseDto;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

public class BaseController<T> {

	@Autowired
	private BaseService<T> serviceT;

	@Operation(summary = "Consultar todos los registros", responses = {
			@ApiResponse(responseCode = "200", description = "Lista de objetos obtenida"),
			@ApiResponse(responseCode = "404", description = "No se encontraron objetos") })
	@GetMapping
	public List<T> all() throws Exception {
		return serviceT.all();
	}

	// El id al utilizar el pathvariable lleva llaves
	@Operation(summary = "Consultar registros por id", responses = {
			@ApiResponse(responseCode = "200", description = "consulta de registro por id exitosa "),
			@ApiResponse(responseCode = "404", description = "No se encontro registro por id ") })
	@GetMapping("/{id}")
	public Optional<T> findById(@PathVariable Long id) throws Exception {
		return serviceT.findById(id);
	}

	//
	@Operation(summary = "guardar registros", responses = {
			@ApiResponse(responseCode = "201", description = " registro guardado exitosamente"), })
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public ResponseEntity<ApiResponseDto<T>> save(@RequestBody T instanceEntity) throws Exception {
		try {
			return ResponseEntity.ok(new ApiResponseDto<T>(" Datos guardados", serviceT.save(instanceEntity), true));

		} catch (Exception e) {
			return ResponseEntity.internalServerError().body(new ApiResponseDto<T>(e.getMessage(), null, false));
		}
	}

	@Operation(summary = "Modifica los registros", responses = {
			@ApiResponse(responseCode = "200", description = "Actualizacion exitosa "),
			@ApiResponse(responseCode = "404", description = "Error al modificar ") })

	@PutMapping("/{id}" )
	public ResponseEntity<ApiResponseDto<T>> update(@PathVariable Long id, @RequestBody T instanceEntity) {
		try {
			serviceT.update(id, instanceEntity);
			return ResponseEntity.ok(new ApiResponseDto<T>(" Datos guardados", null, true));
		} catch (Exception e) {
			return ResponseEntity.internalServerError().body(new ApiResponseDto<T>(e.getMessage(), null, false));
		}
	}

	@Operation(summary = "Eliminar registro por id", responses = {
			@ApiResponse(responseCode = "204", description = "Registro eliminado exitosamente "),
			@ApiResponse(responseCode = "404", description = " no encontrado ") })

	@DeleteMapping("/{id}" )
	@ResponseStatus(code = HttpStatus.NO_CONTENT)//respuestas sin contenido
	public void delete(@PathVariable Long id) throws Exception {
		serviceT.delete(id);
	}
}
