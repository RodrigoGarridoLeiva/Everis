import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../agregar.service';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  Carro: any[] = [];
  cant: number = 0;
  pagar: number = 0;


   
  constructor(public c:AgregarService) { this.Carro=this.c.Devolver()}

  ngOnInit(): void {

    let n=0;
    this.Carro.forEach(element => {

      this.pagar = this.pagar + this.Carro[n].precio;
      this.cant++;
      n++;
      
    });


  }

  //Funciones del componente



    




  aumentarcantidad(p :any){

    p.carro++;
    this.cant++;
    this.pagar = this.pagar + p.precio;

  }

  disminuircantidad(p: any){ 
    
    p.carro--;
    this.cant--;
    this.pagar = this.pagar - p.precio;


  }

  delete( x: string, p: any) 
    {
      let id = 0;
      let cont = 0 ;

      this.pagar = this.pagar - (p.precio*p.carro); 

      for( let x of this.Carro){
        if (x.codigo == x){
          
            id = cont
        } 
        cont += 1;
      }
    
      this.Carro.splice(id,1); 
      
    }

}
