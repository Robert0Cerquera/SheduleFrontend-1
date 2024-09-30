package com.persona.Backend.Controller.Parameter.Ubicacion;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.persona.Backend.Controller.BaseController;
import com.persona.Backend.Entity.Parameter.Ubicacion.Pais;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/base/parameter/ubicacion/pais")
public class PaisController extends BaseController<Pais> {

}
