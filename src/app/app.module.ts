import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './paginas/alumno/alumno.component';
import { HeaderComponent } from './paginas/header/header.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { JefedepartamentoComponent } from './paginas/jefedepartamento/jefedepartamento.component';
import { MenujefedepartamentoComponent } from './paginas/menujefedepartamento/menujefedepartamento.component';
import { MenualumnoComponent } from './paginas/menualumno/menualumno.component';
import { CarreraComponent } from './paginas/carrera/carrera.component';
import { DepartamentoComponent } from './paginas/departamento/departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    JefedepartamentoComponent,
    AlumnoComponent,
    MenujefedepartamentoComponent,
    MenualumnoComponent,
    CarreraComponent,
    DepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
