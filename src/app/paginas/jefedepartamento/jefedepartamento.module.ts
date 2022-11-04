import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JefedepartamentoComponent } from './jefedepartamento.component';



@NgModule({
  declarations: [
    JefedepartamentoComponent
  ],
  exports:[
    JefedepartamentoModule
  ],
  imports: [
    CommonModule,
    JefedepartamentoModule
  ]
})
export class JefedepartamentoModule { }
