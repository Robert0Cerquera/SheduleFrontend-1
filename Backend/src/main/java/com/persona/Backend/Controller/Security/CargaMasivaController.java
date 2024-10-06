package com.persona.Backend.Controller.Security;

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

import com.persona.Backend.IService.ICargaMasivaService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/carga-masiva")
public class CargaMasivaController {

    @Autowired
    private ICargaMasivaService cargaMasivaService;

    @PostMapping(value = "/usuarios", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> cargarUsuarios(@RequestParam("file") MultipartFile file) {
        try {
            cargaMasivaService.procesarExcel(file);
            return ResponseEntity.ok("{\"message\": \"Carga masiva de usuarios completada exitosamente.\"}");
        } catch (Exception e) {
            e.printStackTrace();
            String errorMessage = String.format("{\"error\": \"Error durante la carga masiva: %s\"}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).contentType(MediaType.APPLICATION_JSON).body(errorMessage);
        }
    }
}
