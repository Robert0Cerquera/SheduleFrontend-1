import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ModuloComponent } from './Security/modulo/modulo.component';
import { VistaComponent } from './Security/vista/vista.component';
import { RoleComponent } from './Security/role/role.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'vista', component: VistaComponent },
{ path: 'registro_modulo', component: ModuloComponent },
{ path: 'registro_role', component: RoleComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },






  {
    path: '**',
    redirectTo: 'home', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
