import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{




  producto: any[] = [];

  i = 0;
  
  formularioProducto = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl('')
    });

  enviar(){

                  this.producto[this.i] = `Código = ${this.formularioProducto.value.codigo}   |  
                  Nombre = ${this.formularioProducto.value.nombre}   |  
                  Precio = $ ${this.formularioProducto.value.precio}   |  
                  Stock = ${this.formularioProducto.value.stock}`;

                  this.i++;

 
  }


}
