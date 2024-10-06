import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../Componentes/Pages/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'registro_home', pathMatch: 'full' },
  { path: 'registro_home', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
