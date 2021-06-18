//Clase Circulo
var Circulo = /** @class */ (function () {
    function Circulo(r) {
        this.r = r;
    }
    Circulo.prototype.CalcularArea = function () {
        var a = 3.14 * ((this.r) * (this.r));
        console.log("\u00C1rea: (" + a + ")");
    };
    Circulo.prototype.CalcularPerimetro = function () {
        var p = 2 * 3.14 * this.r;
        console.log("Perimetro: (" + p + ")");
    };
    return Circulo;
}());
//Clase Cuadrado
var Cuadrado = /** @class */ (function () {
    function Cuadrado(l) {
        this.l = l;
    }
    Cuadrado.prototype.CalcularArea = function () {
        var a = ((this.l) * (this.l));
        console.log("Area: (" + a + ")");
    };
    Cuadrado.prototype.CalcularPerimetro = function () {
        var p = 4 * this.l;
        console.log("Perimetro: (" + p + ")");
    };
    return Cuadrado;
}());
//Main
var forma1;
forma1 = new Circulo(3);
console.log("Circulo");
forma1.CalcularArea();
forma1.CalcularPerimetro();
console.log("--------------------");
var forma2;
forma2 = new Cuadrado(8);
console.log("Cuadrado");
forma2.CalcularArea();
forma2.CalcularPerimetro();
