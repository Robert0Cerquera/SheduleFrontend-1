import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { PersonComponent } from './Security/person/person.component';
import { RoleComponent } from './Security/role/role.component';
import { RolesViewsComponent } from './Security/roles-views/roles-views.component';
import { UserComponent } from './Security/user/user.component';
import { UsersRolesComponent } from './Security/users-roles/users-roles.component';
import { ViewComponent } from './Security/view/view.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { ContinenteComponent } from './Parametrizacion/continente/continente.component';
import { PaisComponent } from './Parametrizacion/pais/pais.component';
import { DepartamentoComponent } from './Parametrizacion/departamento/departamento.component';
import { CiudadComponent } from './Parametrizacion/ciudad/ciudad.component';
import { SedeComponent } from './Parametrizacion/sede/sede.component';
import { EspecialidadComponent } from './Parametrizacion/especialidad/especialidad.component';
import { AmbienteComponent } from './Parametrizacion/ambiente/ambiente.component';
import { PisoComponent } from './Parametrizacion/piso/piso.component';
import { CentroFormacionComponent } from './Parametrizacion/centro-formacion/centro-formacion.component';
import { RegionalComponent } from './Parametrizacion/regional/regional.component';
import { ModuleComponent } from './Security/module/module.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },  
    {
        path: 'menu',
        component: MenuComponent,
    },
    {
        path: 'navbar',
        component: NavbarComponent,
    },
    {
        path: 'module',
        component: ModuleComponent,
    },
    {
        path: 'person',
        component: PersonComponent,
    },
    {
        path: 'role',
        component: RoleComponent,
    },
    {
        path: 'roles_views',
        component: RolesViewsComponent,
    },
    {
        path: 'user',
        component: UserComponent,
    },
    {
        path: 'users_roles',
        component: UsersRolesComponent,
    },
    {
        path: 'view',
        component: ViewComponent,
    },
    //Parametrizacion
    {
        path: 'continente',
        component: ContinenteComponent,
    },
    {
        path: 'pais',
        component: PaisComponent,
    },
    {
        path: 'departamento',
        component: DepartamentoComponent,
    },
    {
        path: 'ciudad',
        component: CiudadComponent,
    },
    {
        path: 'sede',
        component: SedeComponent,
    },
    {
        path: 'especialidad',
        component: EspecialidadComponent,
    },
    {
        path: 'ambiente',
        component: AmbienteComponent,
    },
    {
        path: 'piso',
        component: PisoComponent,
    },
    {
        path: 'centroFormacion',
        component: CentroFormacionComponent,
    },
    {
        path: 'Regional',
        component: RegionalComponent,
    },
];
