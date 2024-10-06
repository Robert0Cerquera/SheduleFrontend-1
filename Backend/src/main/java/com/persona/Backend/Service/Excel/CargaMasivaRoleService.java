package com.persona.Backend.Service.Excel;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.excel.EasyExcel;
import com.persona.Backend.Dto.Excel.RoleExcelDTO;
import com.persona.Backend.Entity.Security.Role;
import com.persona.Backend.IService.EXCEL.ICargaMasivaRoleService;
import com.persona.Backend.IService.Security.IRoleService;
import com.persona.Backend.Service.AuditoriaService;

import io.jsonwebtoken.io.IOException;
import jakarta.transaction.Transactional;

@Service
public class CargaMasivaRoleService implements ICargaMasivaRoleService {
    
    @Autowired
    private IRoleService roleService;

    @Autowired
    private AuditoriaService auditoriaService;

    @Override
    public void procesarExcelRoles(MultipartFile file) throws Exception {
        try {
            List<RoleExcelDTO> rolesExcelList = EasyExcel.read(file.getInputStream())
                    .head(RoleExcelDTO.class)
                    .sheet()
                    .doReadSync();

            for (RoleExcelDTO excelDTO : rolesExcelList) {
                try {
                    guardarRoleDesdeExcel(excelDTO);
                } catch (Exception e) {
                    System.err.println("Error al procesar el rol: " + excelDTO.getNombre());
                    e.printStackTrace();
                }
            }
        } catch (IOException e) {
            throw new RuntimeException("Error al procesar el archivo Excel: " + e.getMessage());
        }
    }

    @Transactional
    private void guardarRoleDesdeExcel(RoleExcelDTO excelDTO) throws Exception {
        try {
            Role role = roleService.findByNombre(excelDTO.getNombre());
            if (role == null) {
                role = new Role();
                role.setNombre(excelDTO.getNombre());
                role.setDescripcion("Descripción del rol: " + excelDTO.getDescripcion());
                auditoriaService.setAuditOnCreate(role);
                role = roleService.save(role);
            }
        } catch (Exception e) {
            System.err.println("Error al guardar el rol con los datos del Excel: " + excelDTO.getNombre());
            e.printStackTrace();
            throw e;
        }
    }
}
