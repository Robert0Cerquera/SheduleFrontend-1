package com.persona.Backend.Controller.Operational.PlanificacionFormativa;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.persona.Backend.Controller.BaseController;
import com.persona.Backend.Entity.Operational.PlanificacionFormativa.ProyectoFormativo;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/base/operational/planificacion_formativa/proyecto_formativo")
public class ProyectoFormativoController extends BaseController<ProyectoFormativo>{

}
