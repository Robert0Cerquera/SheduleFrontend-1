package com.persona.Backend.IService.EXCEL;

import org.springframework.web.multipart.MultipartFile;

public interface ICargaMasivaRoleService {

	void procesarExcelRoles(MultipartFile file) throws Exception;
}
