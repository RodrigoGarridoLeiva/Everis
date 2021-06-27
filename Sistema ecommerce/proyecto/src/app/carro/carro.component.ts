import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../agregar.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  Carro: any[] = [];
  cant: number = 0;
   
  constructor(public c:AgregarService) { this.Carro=this.c.Devolver()}

  ngOnInit(): void {
  }

  //Funciones del componente

  aumentarcantidad(p :any){

    p.carro++;

  }

  disminuircantidad(p: any){ 
    
    p.carro--;

  }

  delete( x: string) 
    {
      let id = 0;
      let cont = 0 ;

      for( let x of this.Carro){
        if (x.codigo == x){
          
            id = cont
        } 
        cont += 1;
      }
    
      this.Carro.splice(id,1); 
    }

}
