import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgregarService {

  Productos: any[] = [];
  n:number = 0;

  //Devuelve la lista completa
  Devolver(){
    return this.Productos;
  }

  constructor() { }
    Agregar(p : any){
       this.Productos.push(p);
  }

  Cant(){

    this.Productos.forEach(element => {

      this.n++;
      
    });

    return this.n;
  }




}
