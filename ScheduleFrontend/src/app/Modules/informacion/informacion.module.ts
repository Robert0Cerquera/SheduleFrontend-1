import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionRoutingModule } from './informacion-routing.module';
import { AboutComponent } from '../../Componentes/Pages/about/about.component';
import { ContactComponent } from '../../Componentes/Pages/contact/contact.component';


@NgModule({
  declarations: [ 
    AboutComponent,
    ContactComponent],
  imports: [
    CommonModule,
    InformacionRoutingModule
  ]
})
export class InformacionModule { }
