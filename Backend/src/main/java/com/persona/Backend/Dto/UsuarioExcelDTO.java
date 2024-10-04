package com.persona.Backend.Dto;

import java.time.LocalDate;

import com.alibaba.excel.annotation.ExcelProperty;
import com.persona.Backend.Entity.Security.Persona;

public class UsuarioExcelDTO {

	    @ExcelProperty("contrasenia")
	    private String contrasenia;

	    @ExcelProperty("personaId")
	    private Persona personaId;

	    @ExcelProperty("primerNombre")
	    private String primerNombre;

	    @ExcelProperty("segundoNombre")
	    private String segundoNombre;

	    @ExcelProperty("primerApellido")
	    private String primerApellido;

	    @ExcelProperty("segundoApellido")
	    private String segundoApellido;

	    @ExcelProperty("tipoDocumento")
	    private String tipoDocumento;

	    @ExcelProperty("numeroDocumento")
	    private String numeroDocumento;

	    @ExcelProperty("email")
	    private String email;

	    @ExcelProperty("genero")
	    private String genero;

	    @ExcelProperty("direccion")
	    private String direccion;

	    @ExcelProperty("telefono")
	    private String telefono;

	    @ExcelProperty("fechaNacimiento")
	    private LocalDate fechaNacimiento;

	    @ExcelProperty("usuarioName")
	    private String usuarioName;
	    
	    @ExcelProperty("rol")
	    private String rol;
	    
	    @ExcelProperty("modulo")
	    private String modulo;

	    @ExcelProperty("moduloIcono")
	    private String moduloIcono;

	    @ExcelProperty("submodulo")
	    private String submodulo;

	    @ExcelProperty("vista")
	    private String vista;

	    @ExcelProperty("vistaRuta")
	    private String vistaRuta;
	    
		public String getModulo() {
			return modulo;
		}

		public void setModulo(String modulo) {
			this.modulo = modulo;
		}

		public String getModuloIcono() {
			return moduloIcono;
		}

		public void setModuloIcono(String moduloIcono) {
			this.moduloIcono = moduloIcono;
		}

		public String getSubmodulo() {
			return submodulo;
		}

		public void setSubmodulo(String submodulo) {
			this.submodulo = submodulo;
		}

		public String getVista() {
			return vista;
		}

		public void setVista(String vista) {
			this.vista = vista;
		}

		public String getVistaRuta() {
			return vistaRuta;
		}

		public void setVistaRuta(String vistaRuta) {
			this.vistaRuta = vistaRuta;
		}

		public String getRol() {
			return rol;
		}

		public void setRol(String rol) {
			this.rol = rol;
		}

		public String getContrasenia() {
			return contrasenia;
		}

		public void setContrasenia(String contrasenia) {
			this.contrasenia = contrasenia;
		}


		public Persona getPersonaId() {
			return personaId;
		}

		public void setPersonaId(Persona personaId) {
			this.personaId = personaId;
		}

		public String getPrimerNombre() {
			return primerNombre;
		}

		public void setPrimerNombre(String primerNombre) {
			this.primerNombre = primerNombre;
		}

		public String getSegundoNombre() {
			return segundoNombre;
		}

		public void setSegundoNombre(String segundoNombre) {
			this.segundoNombre = segundoNombre;
		}

		public String getPrimerApellido() {
			return primerApellido;
		}

		public void setPrimerApellido(String primerApellido) {
			this.primerApellido = primerApellido;
		}

		public String getSegundoApellido() {
			return segundoApellido;
		}

		public void setSegundoApellido(String segundoApellido) {
			this.segundoApellido = segundoApellido;
		}

		

		public String getTipoDocumento() {
			return tipoDocumento;
		}

		public void setTipoDocumento(String tipoDocumento) {
			this.tipoDocumento = tipoDocumento;
		}

		public String getNumeroDocumento() {
			return numeroDocumento;
		}

		public void setNumeroDocumento(String numeroDocumento) {
			this.numeroDocumento = numeroDocumento;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getGenero() {
			return genero;
		}

		public void setGenero(String genero) {
			this.genero = genero;
		}

		public String getDireccion() {
			return direccion;
		}

		public void setDireccion(String direccion) {
			this.direccion = direccion;
		}

		public String getTelefono() {
			return telefono;
		}

		public void setTelefono(String telefono) {
			this.telefono = telefono;
		}

		public LocalDate getFechaNacimiento() {
			return fechaNacimiento;
		}

		public void setFechaNacimiento(LocalDate fechaNacimiento) {
			this.fechaNacimiento = fechaNacimiento;
		}

		public String getUsuarioName() {
			return usuarioName;
		}

		public void setUsuarioName(String usuarioName) {
			this.usuarioName = usuarioName;
		}

	
	    
	    
	    
}
