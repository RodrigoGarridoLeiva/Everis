import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent{




  salida!: string;
  array: any[] = [];
  venta: any[] = [];
  i = 0 //Aux para agregar producto
  j = 0 //Aux para agregar compra
  aux = 0//Aux id a editar
  total: number = 0//Aux total a pagar
  iva: number = 0 //Aux total con iva incluido


  formulario = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl(''),
    descripcion: new FormControl(''),
    stock: new FormControl('')
 });

 enviar(){

  this.array[this.i] = {codigo:  this.formulario.value.codigo ,nombre:  this.formulario.value.nombre , precio: this.formulario.value.precio
    , descripcion:  this.formulario.value.descripcion, stock: this.formulario.value.stock , numero: this.i};

  this.i++;

 }

 delete(n: any){


   this.array[n].codigo = null;


 }

 agregar(id: any, num: any ,precio: any, name: any){

    this.venta[this.j] = {id: this.j, codigo: num ,precio: precio, nombre: name};
    this.j++;
    this.total = this.total + parseFloat(precio);
    this.iva = this.total*1.19;
 }

 eliminarproduct(id: any){

  
  this.total = this.total - parseFloat(this.venta[id].precio);
  this.iva = this.total*1.19;
  this.venta[id].codigo = null;

 }

 editar(){

  this.aux = parseFloat(this.formulario.value.codigo);

  this.array[this.aux] = {codigo:  this.formulario.value.codigo ,nombre:  this.formulario.value.nombre , precio: this.formulario.value.precio
    , descripcion:  this.formulario.value.descripcion, stock: this.formulario.value.stock , numero: this.aux};

    
 }

 

}
