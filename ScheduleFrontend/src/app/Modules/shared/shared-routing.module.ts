import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../../Componentes/Pages/menu/menu.component';
import { NavbarComponent } from '../../Componentes/Pages/navbar/navbar.component';

const routes: Routes = [
  { path: 'registro_navbar', component: NavbarComponent },
  { path: 'registro_', component: MenuComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
