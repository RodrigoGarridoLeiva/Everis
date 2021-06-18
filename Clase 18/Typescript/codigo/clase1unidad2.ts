console.log("Buenos Días");

let estado: boolean = true;
let nivel: number = 50;
let nombre: string = "Pedro";
let apellido: string = "Perez";

console.log(estado);
console.log("El nivel es: "+nivel);
console.log("Buenos días "+nombre+" "+apellido);


console.log(`Hola: ${nombre} ${apellido} `);


for(let i=0;i<10; i++){

    console.log(i);
}

let arreglo: number[] = [1,2,3,4,5,6,7];

for(let i=0; i<arreglo.length; i++){

    console.log(arreglo[i]);

}

let arreglo2: string[] = ["Pedro","Juan","Diego","Maria"];
for(let i=0; i<arreglo2.length;i++){

    console.log(arreglo2[i]);

}

//foreach
for(let aux of arreglo2){

    console.log(aux);

}

//Condiciones
var num=10;
if(num%2==0){
    console.log("Numero par");
}else{
    console.log("Numero impar");
}

//Def arreglos
var lista:number[]= new Array(4);
for (var i=0; i<lista.length;i++){

    lista[i]=i*3;
    console.log(lista[i]);
}

console.log("------------------------------------------");
var nombres:String[]=new Array("Juan","Maria","Pedro");

let numeros = [1,2,3,4];

numeros.forEach(function(value){

    console.log(value);
});

console.log("----------------------Hablar Function------------------------");
var persona = {

    nombre:"Pedro",
    apellido: "Fuentes",
    hablar: function(){}
}

persona.hablar = function(){

    console.log("Buenos Días "+persona.nombre);
}

persona.hablar();