package com.persona.Backend.Controller.Operational.GestionFormativa;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.persona.Backend.Controller.BaseController;
import com.persona.Backend.Entity.Operational.GestionFormativa.Rap;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/base/operational/gestion_formativa/rap")
public class RapController extends BaseController<Rap>{

}
