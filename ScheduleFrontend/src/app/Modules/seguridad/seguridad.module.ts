import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { ModuloComponent } from '../../Componentes/Security/modulo/modulo.component';
import { RoleComponent } from '../../Componentes/Security/role/role.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from '../../Componentes/Pages/table/table.component';
import { CargarUsuariosComponent } from '../../Componentes/Security/cargar-usuarios/cargar-usuarios.component';
import { UsuariosRolesComponent } from '../../Componentes/Security/usuarios-roles/usuarios-roles.component';
import { VistaComponent } from '../../Componentes/Security/vista/vista.component';
import { VistasRolesComponent } from '../../Componentes/Security/vistas-roles/vistas-roles.component';
import { PersonaUsuarioComponent } from '../../Componentes/Security/persona-usuario/persona-usuario.component';


@NgModule({
  declarations: [
    CargarUsuariosComponent,
    ModuloComponent,
    RoleComponent,
    UsuariosRolesComponent,
    VistaComponent,
    VistasRolesComponent, 
    PersonaUsuarioComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    ReactiveFormsModule, NgSelectModule, TableComponent
  ]
})
export class SeguridadModule { }
