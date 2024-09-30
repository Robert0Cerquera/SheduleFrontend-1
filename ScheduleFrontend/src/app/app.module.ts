// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'; // Importa HttpClientModule
import { AppComponent } from './app.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './Pages/login-component/login-component.component';
import { AuthService } from './Services/Jwt/auth-service.service';
import {AuthInterceptorService} from "./Services/Jwt/auth-interceptor.service";


// import { LoginComponent } from './Pages/login/login.component';

@NgModule({
  declarations: [
    // LoginComponent,
    AppComponent,
    MenuComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,// Importa esto para los formularios reactivos
    HttpClientModule, // Para hacer peticiones HTTP
    FontAwesomeModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true // Esto asegura que Angular pueda manejar múltiples interceptores
    }
    ],
  bootstrap: [AppComponent,] //LoginComponent]
})
export class AppModule { }
