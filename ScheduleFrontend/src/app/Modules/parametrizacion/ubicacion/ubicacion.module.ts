import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UbicacionRoutingModule } from './ubicacion-routing.module';
import { PaisComponent } from '../../../Componentes/Parametrizacion/Ubicacion/pais/pais.component';
import { CiudadComponent } from '../../../Componentes/Parametrizacion/Ubicacion/ciudad/ciudad.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from '../../../Componentes/Pages/table/table.component';
import { ContinenteComponent } from '../../../Componentes/Parametrizacion/Ubicacion/continente/continente.component';
import { DepartamentoComponent } from '../../../Componentes/Parametrizacion/Ubicacion/departamento/departamento.component';
import { LocalidadComponent } from '../../../Componentes/Parametrizacion/Ubicacion/localidad/localidad.component';

@NgModule({
  declarations: [
    ContinenteComponent,
    PaisComponent,
    DepartamentoComponent,
    CiudadComponent, 
    LocalidadComponent,

  ],
  imports: [
    CommonModule,
    UbicacionRoutingModule,
    ReactiveFormsModule, NgSelectModule, TableComponent, FormsModule
  ]
})
export class UbicacionModule { }
