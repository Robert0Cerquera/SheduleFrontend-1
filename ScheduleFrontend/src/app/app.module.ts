// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppComponent } from './app.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
// import { LoginComponent } from './Pages/login/login.component';

@NgModule({
  declarations: [
    // LoginComponent,
    AppComponent,
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Agrega HttpClientModule en los imports
  ],
  providers: [],
  bootstrap: [AppComponent,] //LoginComponent]
})
export class AppModule { }
