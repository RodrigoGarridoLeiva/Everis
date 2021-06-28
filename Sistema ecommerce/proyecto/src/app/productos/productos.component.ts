import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgregarService } from '../agregar.service';
import { ProductoService } from '../producto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  n:number = 0;
  producto: any;
  actual: any;
  busqueda: any;
  page !: number;
  search !: string;
  clave = new FormControl('');
 


  constructor(private p : ProductoService , private f : AgregarService, private router: Router){}

  ngOnInit(){
    this.producto = this.p.devolver();
    this.actual = this.p.devolver();
    this.n = this.f.Cant();
  }

  
  AgregarProducto(p : any){
    this.f.Agregar(p);
    this.n++;
  }

  busquedaClave(){
    let pos = []
    let j=0
    for(let i=0;i<this.actual.length;i++){
      
      if(this.actual[i].tags != this.clave.value){

       pos.push(i);
        
      }
    }
    for(let i=0;i<pos.length;i++){
      
        this.producto.splice(pos[i],1);
        

    }
  }

  limpiarClave(){
    let j=0

    this.producto = this.actual;
    this.router.navigate(['/productos']);
    
  }


}
