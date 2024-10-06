import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbienteComponent } from '../../../Componentes/Parametrizacion/Infraestructura/ambiente/ambiente.component';
import { EspecialidadComponent } from '../../../Componentes/Parametrizacion/Infraestructura/especialidad/especialidad.component';
import { PisoComponent } from '../../../Componentes/Parametrizacion/Infraestructura/piso/piso.component';
import { RegionalComponent } from '../../../Componentes/Parametrizacion/Infraestructura/regional/regional.component';
import { SedeComponent } from '../../../Componentes/Parametrizacion/Infraestructura/sede/sede.component';
import { CentroFormacionComponent } from '../../../Componentes/Parametrizacion/Infraestructura/centro-formacion/centro-formacion.component';

const routes: Routes = [
  { path: 'registro_ambiente', component: AmbienteComponent },
  { path: 'registro_centro-formacion', component: CentroFormacionComponent },
  { path: 'registro_especialidad', component: EspecialidadComponent },
  { path: 'registro_piso', component: PisoComponent },
  { path: 'registro_regional', component: RegionalComponent },
  { path: 'registro_sede', component: SedeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraestructuraRoutingModule { }
