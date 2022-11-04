import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenualumnoComponent } from './menualumno.component';



@NgModule({
  declarations: [
    MenualumnoComponent
  ],
  exports:[
    MenualumnoModule
  ],
  imports: [
    CommonModule,
    MenualumnoModule
  ]
})
export class MenualumnoModule { }
