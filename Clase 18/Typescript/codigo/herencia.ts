class Persona2{

    protected nombre:string;
    protected rut:string;

    constructor(nombre:string, rut:string){

        this.nombre = nombre;
        this.rut = rut;
    }

    imprimir(){

        console.log(`Nombre: ${this.nombre}`);
        console.log(`Rut: ${this.rut}`);

    }

}

class Trabajador extends Persona2{

    private sueldo:number;
    constructor(nombre:string, rut:string, sueldo:number){

        super(nombre,rut);
        this.sueldo = sueldo;
    }

    imprimir(){
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`);

    }



}


let perso2 = new Persona2('Carolina', '12345567-5');
perso2.imprimir()

let trab1 = new Trabajador('María','1111111-1',10000000);
trab1.imprimir();


