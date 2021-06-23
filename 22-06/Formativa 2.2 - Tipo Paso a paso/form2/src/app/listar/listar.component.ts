import { Component, Input, OnInit } from '@angular/core';
import {ElementosComponent} from '..//elementos/elementos.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  listado: any;

  nombre: string = "Bebestibles";
  descripcion: string = "Listado de productos del supermercado con la caracteristica de bebestible.";

  constructor(private productos : ElementosComponent){}

  ngOnInit(){
    this.listado = this.productos.devolver();
  }

}
