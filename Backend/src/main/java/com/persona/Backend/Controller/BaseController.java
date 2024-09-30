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

import com.persona.Backend.Entity.BaseEntity;
import com.persona.Backend.Service.BaseService;
import com.persona.Backend.Utils.ApiResponseDto;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

public abstract class BaseController<T extends BaseEntity> {

    @Autowired
    private BaseService<T> serviceT;

    @Operation(summary = "Consultar todos los registros", responses = {
            @ApiResponse(responseCode = "200", description = "Lista de objetos obtenida"),
            @ApiResponse(responseCode = "404", description = "No se encontraron objetos") })
    @GetMapping
    public List<T> all() throws Exception {
        return serviceT.all();
    }

    @Operation(summary = "Consultar registros por id", responses = {
            @ApiResponse(responseCode = "200", description = "Consulta de registro por id exitosa"),
            @ApiResponse(responseCode = "404", description = "No se encontró registro por id") })
    @GetMapping("/{id}")
    public ResponseEntity<Optional<T>> findById(@PathVariable Long id) throws Exception {
        Optional<T> entity = serviceT.findById(id);
        if (entity.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(entity);
        }
        return ResponseEntity.ok(entity);
    }

    @Operation(summary = "Guardar registros", responses = {
            @ApiResponse(responseCode = "201", description = "Registro guardado exitosamente") })
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public ResponseEntity<ApiResponseDto<T>> save(@RequestBody T instanceEntity) throws Exception {
        try {
            T savedEntity = serviceT.save(instanceEntity);
            return ResponseEntity.ok(new ApiResponseDto<T>("Datos guardados", savedEntity, true));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new ApiResponseDto<T>(e.getMessage(), null, false));
        }
    }

    @Operation(summary = "Modificar registros", responses = {
            @ApiResponse(responseCode = "200", description = "Actualización exitosa"),
            @ApiResponse(responseCode = "404", description = "Error al modificar") })
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponseDto<T>> update(@PathVariable Long id, @RequestBody T instanceEntity) {
        try {
            serviceT.update(id, instanceEntity);
            return ResponseEntity.ok(new ApiResponseDto<T>("Datos actualizados", null, true));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new ApiResponseDto<T>(e.getMessage(), null, false));
        }
    }

    @Operation(summary = "Eliminar registro por id", responses = {
            @ApiResponse(responseCode = "204", description = "Registro eliminado exitosamente"),
            @ApiResponse(responseCode = "404", description = "No encontrado") })
    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) throws Exception {
        serviceT.delete(id);
    }
    
    @Operation(summary = "Traer solo los registros con fecha de eliminación distintos a Null", responses = {
    		 @ApiResponse(responseCode = "200", description = "Consulta de registro exitosa"),
             @ApiResponse(responseCode = "404", description = "No se encontró registro") })
    @GetMapping("/consultarRegistrosSinEliminarActivos")
    public List<T> findByDeletedAtIsNullAndStateTrue(){
    	return serviceT.findByDeletedAtIsNullAndStateTrue();
    }
    
    
    @Operation(summary = "Traer solo los registros con fecha de eliminación distintos a Null", responses = {
   		 @ApiResponse(responseCode = "200", description = "Consulta de registro exitosa"),
            @ApiResponse(responseCode = "404", description = "No se encontró registro") })
   @GetMapping("/consultarRegistrosSinEliminar")
   public List<T> findByDeletedAtIsNull(){
   	return serviceT.findByDeletedAtIsNull();
   }
    
    
    
}
