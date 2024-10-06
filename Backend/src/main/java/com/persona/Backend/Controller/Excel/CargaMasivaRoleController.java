package com.persona.Backend.Controller.Excel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.persona.Backend.IService.EXCEL.ICargaMasivaRoleService;



@CrossOrigin("*")
@RestController
@RequestMapping("/api/carga_masiva")
public class CargaMasivaRoleController {

	 @Autowired
	 private ICargaMasivaRoleService cargaMasivaRoleService;

	    @PostMapping(value = "/roles", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<String> cargarRoles(@RequestParam("file") MultipartFile file) {
	        try {
	            cargaMasivaRoleService.procesarExcelRoles(file);
	            return ResponseEntity.ok("{\"message\": \"Carga masiva de roles completada exitosamente.\"}");
	        } catch (Exception e) {
	            e.printStackTrace();
	            String errorMessage = String.format("{\"error\": \"Error durante la carga masiva: %s\"}", e.getMessage());
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                    .contentType(MediaType.APPLICATION_JSON)
	                    .body(errorMessage);
	        }
	    }
}
