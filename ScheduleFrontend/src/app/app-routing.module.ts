import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component'; // Ejemplo de ruta
import { MenuComponent } from './Pages/menu/menu.component'; // Importa tus componentes de las rutas
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'app-component', 
    component: AppComponent,
    loadChildren: () => import('./app.module').then(m => m.AppModule),
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
