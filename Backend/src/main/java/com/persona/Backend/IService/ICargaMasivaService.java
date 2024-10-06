package com.persona.Backend.IService;

import org.springframework.web.multipart.MultipartFile;

public interface ICargaMasivaService {
	void procesarExcel(MultipartFile file) throws Exception;
	
}
