var n1 = null;
var n2 = null;
var n3 = null;
var n4 = null;
var ex = null;
var total = null;
var parcial = null;


function calcular(){

n1 = document.getElementsByName("n1")[0].value;
n2 = document.getElementsByName("n2")[0].value;
n3 = document.getElementsByName("n3")[0].value;
n4 = document.getElementsByName("n4")[0].value;
ex = document.getElementsByName("ex")[0].value;


total = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4))/4;
parcial = total;
total = (parseFloat(total)*0.6) + (parseFloat(ex)*0.4);

if(parseFloat(n1)>=1 && parseFloat(n1)<=7 && parseFloat(n2)>=1 && parseFloat(n2)<=7 && parseFloat(n3)>=1 && parseFloat(n3)<=7 && parseFloat(n4)>=1 && parseFloat(n4)<=7 && parseFloat(ex)>=1 && parseFloat(ex)<=7 ){

    document.getElementById("prom").innerHTML = total;
    document.getElementById("nota1").innerHTML = n1;
    document.getElementById("nota2").innerHTML = n2;
    document.getElementById("nota3").innerHTML = n3;
    document.getElementById("nota4").innerHTML = n4;
    document.getElementById("exa").innerHTML = ex;
    document.getElementById("parcial").innerHTML = parcial;
    

    if((parseFloat(total))>=4){

      if((parseFloat(parcial))>=4){
        
        alert("El promedio es: "+total+" ESTAS APROBADO!!!");
        document.getElementById("status").innerHTML = "Aprobado";

      }else{
        alert("Tus notas parciales no fueron suficientes: "+parcial+" ESTAS REPROBADO!!!");
        document.getElementById("status").innerHTML = "Reprobado";
      }

    }else{
        alert("El promedio es: "+total+" ESTAS REPROBADO :c");
        document.getElementById("status").innerHTML = "Reprobado";
    }

    

}else{

    alert(" Porfavor ingrese valores correctos dentro del rango 1-7 ");
}


}
