import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{


  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

salida!:string;

  formulario = new FormGroup({
    pais: new FormControl(''),
    calle: new FormControl(''),
    ciudad: new FormControl(''),
    region: new FormControl(''),
    postal: new FormControl(''),
    
    
 });

 enviar(){
  let pais = this.formulario.value.pais;
  let calle = this.formulario.value.calle;
  let ciudad = this.formulario.value.ciudad;
  let region = this.formulario.value.region;
  let postal = this.formulario.value.postal;
  
 
   if(pais=="" || calle=="" || ciudad=="" || region=="" || postal=="" ){
 
     this.salida = "Porfavor llene todos los campos!";
 
   }else{

    this.router.navigate(['pago']);

    
 }}


}
