import { Component } from '@angular/core';
//decorador
@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//clase export es como un modificador de acceso
export class AppComponent {
  title = 'sergioAngular';//propiedades
  saludo="probando porpiedades";
}
