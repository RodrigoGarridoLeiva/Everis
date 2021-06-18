//Interface figura
interface Figura {
    
    CalcularArea(): void;
    CalcularPerimetro(): void;
 
}

//Clase Circulo
class Circulo implements Figura{
    
    constructor(private r:number) {}
        
    CalcularArea(){
        let a = 3.14 * ((this.r)*(this.r))
        console.log(`Área: (${a})`);
    }
    CalcularPerimetro(){
        let p = 2* 3.14* this.r
        console.log(`Perimetro: (${p})`);
    }

}

//Clase Cuadrado

class Cuadrado implements Figura{
    constructor(private l:number) {}
        
    CalcularArea(){
        let a = ((this.l)*(this.l))
        console.log(`Area: (${a})`);
    }
    CalcularPerimetro(){
        let p = 4* this.l
        console.log(`Perimetro: (${p})`);
    }
}

//Main

let forma1: Circulo;
    
    forma1 = new Circulo(3);
    console.log("Circulo")
    forma1.CalcularArea();
    forma1.CalcularPerimetro();
    console.log("--------------------")

let forma2: Cuadrado;

    forma2 = new Cuadrado(8);
    console.log("Cuadrado")
    forma2.CalcularArea();
    forma2.CalcularPerimetro();
