import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenujefedepartamentoComponent } from './menujefedepartamento.component';



@NgModule({
  declarations: [
    MenujefedepartamentoComponent
  ],
  exports:[
    MenujefedepartamentoModule
  ],
  imports: [
    CommonModule,
    MenujefedepartamentoModule
  ]
})
export class MenujefedepartamentoModule { }
