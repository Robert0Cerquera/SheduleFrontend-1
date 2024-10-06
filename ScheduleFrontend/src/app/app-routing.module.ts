import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Componentes/Pages/layout/layout.component';
import { AuthGuard } from './Services/Jwt/AuthGuard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth', // Redirige a la autenticación por defecto
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule) // Ruta para el login
  },
  {
    path: '',
    component: LayoutComponent, // Carga el LayoutComponent después del login exitoso
    canActivate: [AuthGuard],    // Asegura que el usuario esté autenticado
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./Modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'parametrizacion',
        loadChildren: () => import('./Modules/parametrizacion/parametrizacion.module').then(m => m.ParametrizacionModule)
      },
      {
        path: 'seguridad',
        loadChildren: () => import('./Modules/seguridad/seguridad.module').then(m => m.SeguridadModule)
      }
    ]
  }
  // Agregar más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
