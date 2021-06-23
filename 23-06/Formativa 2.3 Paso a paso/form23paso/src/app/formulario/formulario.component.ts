import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{


  salida!: string;
  parcial!: number;
  final!: number;
  name!: string;
  rut!: string;

  formulario = new FormGroup({
     rut: new FormControl(''),
     nombre: new FormControl(''),
     notas: new FormGroup({
       nota1: new FormControl(''),
       nota2: new FormControl(''),
       nota3: new FormControl(''),
       nota4: new FormControl(''),
       exam: new FormControl('')
     })
  });

enviar(){
 let nota1 = parseInt(this.formulario.value.notas.nota1);
 let nota2 = parseInt(this.formulario.value.notas.nota2);
 let nota3 = parseInt(this.formulario.value.notas.nota3);
 let nota4 = parseInt(this.formulario.value.notas.nota4);
 let exam = parseInt(this.formulario.value.notas.exam);
 this.name = this.formulario.value.nombre;
 this.rut = this.formulario.value.rut;

  if(nota1<1 || nota1>7 || nota2<1 || nota2>7 || nota3<1 || nota3>7 || nota4<1 || nota4>7 || exam<1 || exam>7 ){

    this.salida = "Porfavor Ingrese valores correctos";

  }else{

 if(nota1>=4 && nota2>=4 && nota3>=4 && nota4>=4){

    this.parcial = (nota1+nota2+nota3+nota4)/4;
    this.final = (this.parcial*0.7) + (exam*0.3);

    if(this.parcial<4){
      this.salida = "El alumno reprueba el curso";
    }else{

      if(this.final>=4)
        this.salida = "El alumno aprueba el curso";
      else
        this.salida = "El alumno reprueba el curso";

    }
 
}else
  this.salida = "El alumno reprueba el curso";

}}

}
