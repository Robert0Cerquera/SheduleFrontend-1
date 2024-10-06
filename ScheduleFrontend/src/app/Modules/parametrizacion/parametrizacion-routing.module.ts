import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '/ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then(m => m.UbicacionModule)
  },
  {
    path: '/infraestructura',
    loadChildren: () => import('./infraestructura/infraestructura.module').then(m => m.InfraestructuraModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }
