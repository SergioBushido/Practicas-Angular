import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  // en el template tb se puede incluir directamente el html
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
 //vamos a meter estilos in line
 //styles:["p{ background-color: red;"]
})
export class EmpleadoComponent {


  nombre="sergio";
  apellido="fernandez";
  private edad="44";
  getEdad(): number {
    return Number(this.edad); // Convierte el string a un número
  }
  

  llamaEmpresa(value:String){
    
  }
}
