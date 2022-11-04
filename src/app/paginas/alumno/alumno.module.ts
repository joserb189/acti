import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoComponent } from './alumno.component';



@NgModule({
  declarations: [
    AlumnoComponent
  ],
  exports:[
    AlumnoModule
  ],
  imports: [
    CommonModule,
    AlumnoModule
  ]
})
export class AlumnoModule { }
