import { Component } from '@angular/core';
import { Model } from './models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public model: Model = new Model;

  constructor(){

    this.model.nombre = "Joaquin"
    this.model.apellido = "Lopez"
    this.model.edad = "30"
    this.model.email = "jlopez@gmail.com"
    this.model.sueldos[0] = "1200"
    this.model.sueldos[1] = "1650"
    this.model.sueldos[2] = "1120"
    this.model.sueldos[3] = "800"
    this.model.sueldos[4] = "1550"
    this.model.estado = true
    this.model.actividad[0] = "Suelos"
    this.model.actividad[1] = "Suelos"
    this.model.actividad[2] = "Techo"
    this.model.actividad[3] = "Suelos"
    this.model.actividad[4] = "Gestión"
    this.model.notas[0] = "40"
    this.model.notas[1] = "60"
    this.model.notas[2] = "45"
    this.model.notas[3] = "50"
    this.model.notas[4] = "55"


  }


}


