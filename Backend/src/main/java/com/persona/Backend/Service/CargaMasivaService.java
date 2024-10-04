package com.persona.Backend.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.excel.EasyExcel;
import com.persona.Backend.Dto.UsuarioExcelDTO;
import com.persona.Backend.Entity.Security.Persona;
import com.persona.Backend.Entity.Security.Usuario;
import com.persona.Backend.IRepository.Security.IPersonaRepository;
import com.persona.Backend.IService.ICargaMasivaService;
import com.persona.Backend.IService.Security.IPersonaService;
import com.persona.Backend.IService.Security.IUsuarioService;

import io.jsonwebtoken.io.IOException;
import jakarta.transaction.Transactional;

@Service
public class CargaMasivaService implements ICargaMasivaService {
	 @Autowired
	    private IPersonaService personaService;

	    @Autowired
	    private IUsuarioService usuarioService;
	    
	    @Autowired
	    private IPersonaRepository personaRepository;

	    @Override
	    public void procesarExcel(MultipartFile file) throws Exception {
	        try {
	            // Leer el archivo Excel y convertirlo en una lista de UsuarioExcelDTO
	            List<UsuarioExcelDTO> usuariosExcelList = EasyExcel.read(file.getInputStream())
	                    .head(UsuarioExcelDTO.class)
	                    .sheet()
	                    .doReadSync();

	            // Procesar cada fila del archivo Excel
	            for (UsuarioExcelDTO excelDTO : usuariosExcelList) {
	                try {
	                    guardarUsuarioDesdeExcel(excelDTO);
	                } catch (Exception e) {
	                    System.err.println("Error al procesar el usuario: " + excelDTO.getUsuarioName());
	                    e.printStackTrace();
	                }
	            }
	        } catch (IOException e) {
	            throw new RuntimeException("Error al procesar el archivo Excel: " + e.getMessage());
	        }
	    }

	    @Transactional
	    private void guardarUsuarioDesdeExcel(UsuarioExcelDTO excelDTO) throws Exception {
	        try {
	            // Crear y guardar la entidad Persona usando personaService
	            Persona persona = new Persona();
	            persona.setPrimerNombre(excelDTO.getPrimerNombre());
	            persona.setSegundoNombre(excelDTO.getSegundoNombre());
	            persona.setPrimerApellido(excelDTO.getPrimerApellido());
	            persona.setSegundoApellido(excelDTO.getSegundoApellido());
	            persona.setTipoDocumento(excelDTO.getTipoDocumento());
	            persona.setNumeroDocumento(excelDTO.getNumeroDocumento());
	            persona.setEmail(excelDTO.getEmail());
	            persona.setGenero(excelDTO.getGenero());
	            persona.setDireccion(excelDTO.getDireccion());
	            persona.setTelefono(excelDTO.getTelefono());
	            persona.setFechaNacimiento(excelDTO.getFechaNacimiento());

	            // Guardar la persona y obtener el objeto guardado con ID generado
	            Persona personaGuardada = personaService.save(persona);

	            // Crear y guardar la entidad Usuario asociada usando usuarioService
	            Usuario usuario = new Usuario();
	            usuario.setContrasenia(excelDTO.getContrasenia()); // Asegúrate de encriptar la contraseña antes de guardar
	            usuario.setPersonaId(personaGuardada); // Asignar la entidad `Persona` completa
	            usuario.setUsuarioName(excelDTO.getUsuarioName());
	            usuario.setCreatedAt(LocalDateTime.now());
	            usuario.setState(true);
	            usuarioService.saveUsuarioJwt(usuario);

	        } catch (Exception e) {
	            System.err.println("Error al guardar el usuario con los datos del Excel: " + excelDTO.getUsuarioName());
	            e.printStackTrace();
	            throw e;
	        }
	    }


}
