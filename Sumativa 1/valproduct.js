

//Definiendo un arreglo nombre de errores
var arreglo = new Array();
arreglo[0]="errorNombre";
arreglo[1]="errorCategoria";
arreglo[2]="errorFloat";
arreglo[3]="errorPrecio";


function validar(){
    var entrada = new Array();
    entrada[0]=document.getElementById('nombre').value;
    entrada[1]=document.getElementById('categoria').value;
    entrada[2]=document.getElementById('float').value;
    entrada[3]=document.getElementById('precio').value;

    var error = new Array();
    error[0] = "<span style='color: red'>Ingrese el nombre!!</span>";
    error[1] = "<span style='color: red'>Ingrese la categoria!!</span>";
    error[2] = "<span style='color: red'>Ingrese el float!!</span>";
    error[3] = "<span style='color: red'>Ingrese el precio!!</span>";
    
    //Definiendo un ciclo forech
    for(i in entrada){
        var mensajeError = error[i]
        var valorArreglo = arreglo[i]
        //Validando campo requerido
        if(entrada[i]==""){
            document.getElementById(valorArreglo).innerHTML = mensajeError;
        }

        else if (i==2){
                

                if(parseFloat(entrada[i].value)>1 || parseFloat(entrada[i].value<=0)){
                    document.getElementById('errorFloat').innerHTML =
                    "<span style='color: red'>Ingrese un float válido!!</span>";
                }
                else {
                    document.getElementById('errorFloat').innerHTML =
                    "Campo válido!!";
                }
        }
        else if (i==3){
            
            if(entrada[i].value<=1)
            {
                document.getElementById('errorPrecio').innerHTML =
                "<span style='color: red'>El precio no es valido!!</span>";
            }
            else{
                document.getElementById('errorPrecio').innerHTML =
                "Campo válido!!";
            }

        }
        else {
            document.getElementById(valorArreglo).innerHTML =
                "Campo válido!!";
        }

    }

}


function validarTodos(){
    var contador = 0;
    for(i=0; i<4; i++){
        var valorArreglo = arreglo[i];
        if( document.getElementById(valorArreglo).innerHTML == "Campo válido!!")
        {
            contador++;
        }
    }
    if(contador == 4){
        document.getElementById('mensajefinal').innerHTML = "Producto registrado!!"
    }
}