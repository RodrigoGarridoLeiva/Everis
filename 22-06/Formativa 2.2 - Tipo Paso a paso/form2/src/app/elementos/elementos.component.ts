import { Component } from '@angular/core';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.css']
})
export class ElementosComponent {

  constructor(){

  }

  devolver(){

    return[

      {nombre:'Coca Cola',descripcion:'Bebida Fantasia Sabor Cola 3L',precio:3100, unidades:80},
      {nombre:'Fanta',descripcion:'Bebida Fantasia Sabor Naranja 3L',precio:2900, unidades:30},
      {nombre:'Pap',descripcion:'Bebida Fantasia Sabor Papaya 1.5L',precio:1500, unidades:45},
      {nombre:'Agua Andina',descripcion:'Agua Natural Marca Andina 2.5L',precio:2200, unidades:35},
      {nombre:'Jugo Naranja Andina',descripcion:'Jugo Sabor Naranja Marca Andina 2.5L',precio:2700, unidades:18}

    ]

  }


}
