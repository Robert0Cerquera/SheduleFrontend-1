package com.persona.Backend.Controller.Operational.GestionHorario;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.persona.Backend.Controller.BaseController;
import com.persona.Backend.Entity.Operational.GestionHorario.Convocatoria;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/base/operational/gestion_horario/convocatoria")
public class ConvocatoriaController extends BaseController<Convocatoria> {

}
