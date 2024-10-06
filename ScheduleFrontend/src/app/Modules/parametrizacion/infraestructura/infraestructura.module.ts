import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { InfraestructuraRoutingModule } from './infraestructura-routing.module';
import { AmbienteComponent } from '../../../Componentes/Parametrizacion/Infraestructura/ambiente/ambiente.component';
import { EspecialidadComponent } from '../../../Componentes/Parametrizacion/Infraestructura/especialidad/especialidad.component';
import { PisoComponent } from '../../../Componentes/Parametrizacion/Infraestructura/piso/piso.component';
import { RegionalComponent } from '../../../Componentes/Parametrizacion/Infraestructura/regional/regional.component';
import { SedeComponent } from '../../../Componentes/Parametrizacion/Infraestructura/sede/sede.component';
import { CentroFormacionComponent } from '../../../Componentes/Parametrizacion/Infraestructura/centro-formacion/centro-formacion.component';

@NgModule({
  declarations: [
    AmbienteComponent,
    CentroFormacionComponent,
    EspecialidadComponent,
    PisoComponent,
    RegionalComponent,
    SedeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    InfraestructuraRoutingModule
  ]
})
export class InfraestructuraModule { }
