import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }


  devolver(){
    return[
      {
        codigo: 100, 
        nombre: "SAMSUNG GALAXY NOTE 10 LITE 128GB NEGRO",
        marca: "SAMSUNG",
        precio: 349990,
        stock: 20,
        img:"./assets/1.jpg",
        carro: 1
      },
      {
        codigo: 101, 
        nombre: "IPHONE 11 64GB NEGRO",
        marca: "APPLE",
        precio: 599990,
        stock: 20,
        img:"./assets/2.jpg",
        carro: 1
      },
      {
        codigo: 102, 
        nombre: "XIAOMI POCO X3 PRO 128GB NEGRO",
        marca: "XIAOMI",
        precio: 239900,
        stock: 20,
        img:"./assets/3.jpg",
        carro: 1
      },
      {
        codigo: 103, 
        nombre: "HUAWEI Y9S 128GB NEGRO",
        marca: "HUAWEI",
        precio: 179990,
        stock: 12,
        img:"./assets/4.jpg",
        carro: 1
      },
      {
        codigo: 104, 
        nombre: "SAMSUNG GALAXY A72 128GB NEGRO",
        marca: "SAMSUNG",
        precio: 399990,
        stock: 32,
        img:"./assets/5.jpg",
        carro: 1
      },
      {
        codigo: 105, 
        nombre: "APPLE IPHONE SE 64GB NEGRO",
        marca: "APPLE",
        precio: 389990,
        stock: 44,
        img:"./assets/6.jpg",
        carro: 1
      },
      {
        codigo: 106, 
        nombre: "XIAOMI MI 11 LITE 128GB NEGRO",
        marca: "XIAOMI",
        precio: 249990,
        stock: 10,
        img:"./assets/7.jpg",
        carro: 1
      },
      {
        codigo: 107, 
        nombre: "MOTOROLA G9 PLAY 64GB ROSADO",
        marca: "MOTOROLA",
        precio: 119990,
        stock: 5,
        img:"./assets/8.jpg",
        carro: 1
      },





  ]
}



}
