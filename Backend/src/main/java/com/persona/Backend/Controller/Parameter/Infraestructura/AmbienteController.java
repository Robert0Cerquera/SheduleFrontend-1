package com.persona.Backend.Controller.Parameter.Infraestructura;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.persona.Backend.Controller.BaseController;
import com.persona.Backend.Entity.Parameter.Infraestrutura.Ambiente;

@CrossOrigin("*")//permite que cualquier dominio tenga acceso a el
@RestController
@RequestMapping("/api/v1/base/parameter/infraestructura/ambiente")
public class AmbienteController extends BaseController<Ambiente> {

}
