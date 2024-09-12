package com.persona.Backend.Controller.Operational.GestionPersonal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.persona.Backend.Controller.BaseController;
import com.persona.Backend.Entity.Operational.GestionPersonal.HorariosEmpleados;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/base/operational/gestion_personal/horarios_empleados")
public class HorariosEmpleadosController extends BaseController<HorariosEmpleados>{

}
