import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from './Services/Jwt/auth-service.service';
import { AuthInterceptorService } from './Services/Jwt/auth-interceptor.service';
import { SharedModule } from './Modules/shared/shared.module';
import { InformacionModule } from './Modules/informacion/informacion.module';
import { LoginComponent } from './Componentes/Pages/Auth/login/login.component';
import { AuthModule } from './Modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    // `MenuComponent`, `NavbarComponent` y otros componentes específicos de Pages se moverán a `dashboard.module`
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,       // Disponible globalmente para la comunicación HTTP
    FormsModule,
    ReactiveFormsModule,    // Importaciones compartidas
    FontAwesomeModule,       // Importado de manera global para usar íconos
   SharedModule,      // Importar SharedModule para usar NavbarComponent y MenuComponent globalmente
  InformacionModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
