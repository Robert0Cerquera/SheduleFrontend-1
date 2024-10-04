package com.persona.Backend.Service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.excel.EasyExcel;
import com.persona.Backend.Dto.UsuarioExcelDTO;
import com.persona.Backend.Entity.Security.Persona;
import com.persona.Backend.Entity.Security.Role;
import com.persona.Backend.Entity.Security.Usuario;
import com.persona.Backend.Entity.Security.UsuariosRoles;
import com.persona.Backend.IService.ICargaMasivaService;
import com.persona.Backend.IService.Security.IPersonaService;
import com.persona.Backend.IService.Security.IRoleService;
import com.persona.Backend.IService.Security.IUsuarioService;
import com.persona.Backend.IService.Security.IUsuariosRolesService;

import io.jsonwebtoken.io.IOException;
import jakarta.transaction.Transactional;

@Service
public class CargaMasivaService implements ICargaMasivaService {
	 @Autowired
	    private IPersonaService personaService;

	    @Autowired
	    private IUsuarioService usuarioService;
	    
	    @Autowired
	    private IRoleService roleService;

	    @Autowired
	    private IUsuariosRolesService usuariosRolesService;
	    
	    @Autowired
	    private AuditoriaService auditoriaService;

	    @Override
	    public void procesarExcel(MultipartFile file) throws Exception {
	        try {
	            List<UsuarioExcelDTO> usuariosExcelList = EasyExcel.read(file.getInputStream())
	                    .head(UsuarioExcelDTO.class)
	                    .sheet()
	                    .doReadSync();

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
	            // Crear y guardar la entidad Persona
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
	            auditoriaService.setAuditOnCreate(persona);
	            Persona personaGuardada = personaService.save(persona);

	            // Crear y guardar el Usuario
	            Usuario usuario = new Usuario();
	            usuario.setContrasenia(excelDTO.getContrasenia()); // Encriptar la contraseña
	            usuario.setPersonaId(personaGuardada);
	            usuario.setUsuarioName(excelDTO.getUsuarioName());
	            auditoriaService.setAuditOnCreate(usuario);
	            Usuario usuarioGuardado = usuarioService.saveUsuarioJwt(usuario);

	            // Validar y registrar el rol
	            Role role = roleService.findByNombre(excelDTO.getRol());
	            if (role == null) {
	                role = new Role();
	                role.setNombre(excelDTO.getRol());
	                role.setDescripcion("Descripción del rol: " + excelDTO.getRol());
	                auditoriaService.setAuditOnCreate(role);
	                role = roleService.save(role);
	            }

	            // Registrar la relación en UsuariosRoles
	            UsuariosRoles usuariosRoles = new UsuariosRoles();
	            usuariosRoles.setUsuarioId(usuarioGuardado);
	            usuariosRoles.setRoleId(role);
	            auditoriaService.setAuditOnCreate(usuariosRoles);
	            usuariosRolesService.save(usuariosRoles);

	        } catch (Exception e) {
	            System.err.println("Error al guardar el usuario con los datos del Excel: " + excelDTO.getUsuarioName());
	            e.printStackTrace();
	            throw e;
	        }
	   
}
}
