import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[
HeaderModule
  ],
  imports: [
    CommonModule,
    HeaderModule

  ]
})
export class HeaderModule { }
