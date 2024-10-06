package com.persona.Backend.Dto.Excel;

import com.alibaba.excel.annotation.ExcelProperty;

public class RoleExcelDTO {

	 
    @ExcelProperty("nombre")
    private String nombre;

    @ExcelProperty("descripcion")
    private String descripcion;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

    

  
}
