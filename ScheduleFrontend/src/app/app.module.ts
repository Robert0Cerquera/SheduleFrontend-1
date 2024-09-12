// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Este es el archivo que contiene tus rutas
import { RouterModule } from '@angular/router'; // Importa RouterModule

import { AppComponent } from './app.component';
import { MenuComponent } from './Pages/menu/menu.component'; // Asegúrate de importar tu componente de menú
import { NavbarComponent } from './Pages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  exports:[
    NavbarComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
