import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EjemploTirarComponent } from './ejemplo-tirar/ejemplo-tirar.component';

@NgModule({
  //aqui tenemos que declar los nuevos componentes
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    EjemploTirarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]//esto se dirige a app.component.ts y viene del main.ts
})
export class AppModule { }
