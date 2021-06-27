import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  devolver(){

    return[

      {codigo:1,nombre:'tallarines',precio:1200,stock:100},
      {codigo:2,nombre:'arroz',precio:1100,stock:130},
      {codigo:3,nombre:'lentejas',precio:900,stock:70},
      {codigo:4,nombre:'pan',precio:800,stock:50},
      {codigo:5,nombre:'puré',precio:1400,stock:150},

    ]
  }
}
