package com.persona.Backend.Controller.Parameter.Infraestructura;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.persona.Backend.Controller.BaseController;
import com.persona.Backend.Entity.Parameter.Infraestrutura.CentroFormacion;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/base/parameter/infraestructura/centro_formacion")
public class CentroFormacionController extends BaseController<CentroFormacion> {

}
