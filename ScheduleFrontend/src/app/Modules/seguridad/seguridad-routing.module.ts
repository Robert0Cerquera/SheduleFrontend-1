import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaMasivaComponent } from '../../Componentes/Security/carga-masiva/carga-masiva.component';
import { ModuloComponent } from '../../Componentes/Security/modulo/modulo.component';
import { RoleComponent } from '../../Componentes/Security/role/role.component';
import { UsuariosRolesComponent } from '../../Componentes/Security/usuarios-roles/usuarios-roles.component';
import { VistaComponent } from '../../Componentes/Security/vista/vista.component';
import { VistasRolesComponent } from '../../Componentes/Security/vistas-roles/vistas-roles.component';
import { PersonaUsuarioComponent } from '../../Componentes/Security/persona-usuario/persona-usuario.component';

const routes: Routes = [
  { path: 'registro_carga-masiva', component: CargaMasivaComponent },
  { path: 'registro_modulo', component: ModuloComponent },
  { path: 'registro_role', component: RoleComponent },
  { path: 'registro_usuarios-roles', component: UsuariosRolesComponent },
  { path: 'registro_vista', component: VistaComponent },
  { path: 'registro_vistas-roles', component: VistasRolesComponent },
  { path: 'registro_persona-usuario', component: PersonaUsuarioComponent },
  { path: 'registros_usuarios', component: CargaMasivaComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
