var p1code = null;
var cant1 = null;
var p2code = null;
var cant2 = null;
var p3code = null;
var cant3 = null;

var total1 = 0;
var total2 = 0;
var total3 = 0;
var final = 0;


function calcular(){

p1code = document.getElementsByName("p1code")[0].value;
p2code = document.getElementsByName("p2code")[0].value;
p3code = document.getElementsByName("p3code")[0].value;
cant1 = document.getElementsByName("cant1")[0].value;
cant2 = document.getElementsByName("cant2")[0].value;
cant3 = document.getElementsByName("cant3")[0].value;


if(p1code!="" && cant1!="" && cant1>0 ){

    if(parseFloat(p1code)==213){
        total1 = 6450000*cant1;
    }
    if(parseFloat(p1code)==34){
        total1 = 1032000*cant1;
    }
    if(parseFloat(p1code)==11){
        total1 = 712109*cant1;
    }
    if(parseFloat(p1code)==33){
        total1 = 23550*cant1;
    }
    if(parseFloat(p1code)==96){
        total1 = 18900*cant1;
    }

}

if(p2code!="" && cant2!="" && cant2>0 ){

    if(parseFloat(p2code)==213){
        total2 = 6450000*cant2;
    }
    if(parseFloat(p2code)==34){
        total2 = 1032000*cant2;
    }
    if(parseFloat(p2code)==11){
        total2 = 712109*cant2;
    }
    if(parseFloat(p2code)==33){
        total2 = 23550*cant2;
    }
    if(parseFloat(p2code)==96){
        total2 = 18900*cant2;
    }

}



if(p3code!="" && cant3!="" && cant3>0 ){

    if(parseFloat(p3code)==213){
        total3 = 6450000*cant3;
    }
    if(parseFloat(p3code)==34){
        total3 = 1032000*cant3;
    }
    if(parseFloat(p3code)==11){
        total3 = 712109*cant3;
    }
    if(parseFloat(p3code)==33){
        total3 = 23550*cant3;
    }
    if(parseFloat(p3code)==96){
        total3 = 18900*cant3;
    }

}
final = total1 + total2 + total3;
document.getElementById("res").innerHTML = final;

}
