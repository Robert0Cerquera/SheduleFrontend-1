package com.persona.Backend.Controller.Parameter.Infraestructura;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.persona.Backend.Controller.BaseController;
import com.persona.Backend.Entity.Parameter.Infraestrutura.Especialidad;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/base/parameter/infraestructura/Especialidad")
public class EspecialidadController extends BaseController<Especialidad> {

}
