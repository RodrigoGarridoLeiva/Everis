import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  pagar:number=0 ;
  total:number=0;

prod:any = {
  codigo:'',
  nombre:'',
  precio:'',
}

carro:any = {
  codigo:'',
  nombre:'',
  cantidad:'',
}

productos = [ 

  {codigo:'1001', nombre:'Manzana', precio:'1000'},
  {codigo:'132', nombre:'Naranja', precio:'1200'},
  {codigo:'1012', nombre:'Pera', precio:'800'},
  {codigo:'111', nombre:'Piña', precio:'2100'}

]

carrito = [ 

  {codigo:'', nombre:'', cantidad:''}

]

verificarProductos(){

  return this.productos.length>0

}

agregar(){
  for(let i=0; i<this.productos.length;i++){
    if(this.productos[i].codigo == this.prod.codigo){
      alert("El producto no se ha ingresado porque ya existe en la lista");
      return;
    }
  }

  this.productos.push({codigo:this.prod.codigo, nombre:this.prod.nombre,precio:this.prod.precio})

  this.prod.precio='';
  this.prod.nombre='';
  this.prod.codigo='';

}

seleccionar(prod:any){

  this.prod.codigo = prod.codigo;
  this.prod.nombre = prod.nombre;
  this.prod.precio = prod.precio;

}

eliminar(prod:any){
  for(let i=0;i<this.productos.length;i++){

    if(this.productos[i].codigo == prod.codigo){
      this.productos.splice(i,1);
      alert("Eliminado")
      return;
    }
  }
  alert("No se encontró");
}


modificar(){
  for(let i=0;i<this.productos.length;i++){

    if(this.productos[i].codigo == this.prod.codigo){
      
      this.productos[i].nombre = this.prod.nombre;
      this.productos[i].precio = this.prod.precio;  
      return;
      
      
    }
  }

  alert("Código no existe");
}

agregarcarro(codigo:any, nombre:any){
 
  if(parseFloat(this.carro.cantidad)>0){
  
  for(let i=0; i<this.carrito.length;i++){
    if(this.carrito[i].codigo == codigo){
      this.carrito[i].cantidad = this.carro.cantidad
      alert("Cantidad Actualizada");
      return;
    }
  }

  for(let j=0; j<this.productos.length;j++){

    if(this.productos[j].codigo == codigo){
      this.total = this.total + (parseFloat(this.productos[j].precio)*this.carro.cantidad)
    }

  }

  this.pagar = this.total*1.19

  this.carrito.push({codigo:codigo, nombre:nombre,cantidad:this.carro.cantidad})

  this.carro.cantidad='';

  }else{
    alert("Ingrese un valor adecuado")
  }


}

eliminarcarro(c:any){
  for(let i=0;i<this.carrito.length;i++){

    if(this.carrito[i].codigo == c.codigo){
      this.carrito.splice(i,1);
      alert("Eliminado")
      return;
    }
  }
  alert("No se encontró");
}








}
