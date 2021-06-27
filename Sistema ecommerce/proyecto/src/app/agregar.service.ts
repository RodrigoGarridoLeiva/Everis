import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgregarService {

  Productos: any[] = [];

  //Devuelve la lista completa
  Devolver(){
    return this.Productos;
  }

  constructor() { }
    Agregar(p : any){
       this.Productos.push(p);
  }


}
