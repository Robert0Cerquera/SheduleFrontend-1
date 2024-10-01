import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ModuloComponent } from './Security/modulo/modulo.component';
import { VistaComponent } from './Security/vista/vista.component';
import { RoleComponent } from './Security/role/role.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ContinenteComponent } from './Parametrizacion/Ubicacion/continente/continente.component';
import { PaisComponent } from './Parametrizacion/Ubicacion/pais/pais.component';
import { DepartamentoComponent } from './Parametrizacion/Ubicacion/departamento/departamento.component';
import { CiudadComponent } from './Parametrizacion/Ubicacion/ciudad/ciudad.component';
import { LocalidadComponent } from './Parametrizacion/Ubicacion/localidad/localidad.component';
import { VistasRolesComponent } from './Security/vistas-roles/vistas-roles.component';
import { PersonaUsuarioComponent } from './Security/persona-usuario/persona-usuario.component';
import { JornadaComponent } from './Operacional/jornada/jornada.component';





const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'registro_vista', component: VistaComponent },
{ path: 'registro_modulo', component: ModuloComponent },
{ path: 'registro_role', component: RoleComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'registro_continente', component: ContinenteComponent },
{ path: 'registro_pais', component: PaisComponent },
{ path: 'registro_departamento', component: DepartamentoComponent },
{ path: 'registro_ciudad', component: CiudadComponent },
{ path: 'registro_localidad', component: LocalidadComponent },
{ path: 'registro_vistas_roles', component: VistasRolesComponent },
{ path: 'registro_persona_usuario', component: PersonaUsuarioComponent },
{ path: 'registro_jornada', component: JornadaComponent },











//{ path: 'ubicacion', component:  UbicacionFormComponent },





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
