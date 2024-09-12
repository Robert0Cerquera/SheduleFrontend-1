package com.persona.Backend.Controller.Operational.GestionPersonal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.persona.Backend.Controller.BaseController;
import com.persona.Backend.Entity.Operational.GestionPersonal.TipoContrato;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/base/operational/gestion_personal/tipo_contrato")
public class TipoContratoController extends BaseController<TipoContrato>{

}
