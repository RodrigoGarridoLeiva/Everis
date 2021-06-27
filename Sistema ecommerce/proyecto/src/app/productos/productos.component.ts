import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../agregar.service';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  producto: any;
  page !: number;
  search !: string;
  constructor(private p : ProductoService , private f : AgregarService){}

  ngOnInit(){
    this.producto = this.p.devolver();
  }

 
  AgregarProducto(p : any){
    this.f.Agregar(p);
  }

}
