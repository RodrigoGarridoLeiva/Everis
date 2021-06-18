interface Punto{

    imprimir():void;

}

class Plano implements Punto{


    x:number;
    y:number;

    constructor(x:number, y:number){}

        imprimir4(){

            console.log(`Posición en el plano: (${this.x},${this.y})`)
        }
    
}