import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../../Componentes/Pages/Auth/login/login.component';
import { RecuperarContraseniaComponent } from '../../Componentes/Pages/Auth/recuperar-contrasenia/recuperar-contrasenia.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecuperarContraseniaComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, 
    FormsModule,
     ReactiveFormsModule
  ]
})
export class AuthModule { }
