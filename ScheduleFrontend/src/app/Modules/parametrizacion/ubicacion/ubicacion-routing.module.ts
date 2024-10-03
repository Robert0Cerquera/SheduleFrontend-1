import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from '../../../Componentes/Parametrizacion/Ubicacion/pais/pais.component';
import { CiudadComponent } from '../../../Componentes/Parametrizacion/Ubicacion/ciudad/ciudad.component';
import { ContinenteComponent } from '../../../Componentes/Parametrizacion/Ubicacion/continente/continente.component';
import { DepartamentoComponent } from '../../../Componentes/Parametrizacion/Ubicacion/departamento/departamento.component';
import { LocalidadComponent } from '../../../Componentes/Parametrizacion/Ubicacion/localidad/localidad.component';


const routes: Routes = [
  { path: 'registro_continente', component: ContinenteComponent },
  { path: 'registro_pais', component: PaisComponent },
  { path: 'registro_departamento', component: DepartamentoComponent },
  { path: 'registro_ciudad', component: CiudadComponent },
  { path: 'registro_localidad', component: LocalidadComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbicacionRoutingModule { }
