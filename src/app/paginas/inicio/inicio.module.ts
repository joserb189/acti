import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';



@NgModule({
  declarations: [
    InicioComponent
  ],
  exports:[
    InicioModule
  ],
  imports: [
    CommonModule,
    InicioModule
  ]
})
export class InicioModule { }
