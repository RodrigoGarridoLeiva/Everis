import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapdirectivas',
  templateUrl: './bootstrapdirectivas.component.html',
  styleUrls: ['./bootstrapdirectivas.component.css']
})
export class BootstrapdirectivasComponent {


  gente: any[] = [

    {"nombre":"Juan Perez", "edad":40},
    {"nombre":"Sofia Lopez", "edad":22},

  ]

  gentePorCiudad: any[] = [
    {
      'Ciudad':"Chile",
      'gente':[
      {
        "nombre":"Camilo Cornejo"
      },
      {
        "nombre":"Jonatan Ceballos"
      },
  ]
},
    {
      'Ciudad':"Argentina",
      'gente':[
      {
        "nombre":"Miguel Zenteno"
      },
      {
        "nombre":"Alex Díaz"
      }
      ]
    }
  ];

}
