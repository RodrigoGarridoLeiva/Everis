var arreglo = new Array();
arreglo[0]="errorNombre";
arreglo[1]="errorApellido";
arreglo[2]="errorEmail";
arreglo[3]="errorUser";
arreglo[4]="errorPassword";
arreglo[5]="errorConfirmar";

function validar(){

        var entrada = new Array();
        entrada[0]=document.getElementById('nombre').value;
        entrada[1]=document.getElementById('apellido').value;
        entrada[2]=document.getElementById('email').value;
        entrada[3]=document.getElementById('user').value;
        entrada[4]=document.getElementById('password').value;
        entrada[5]=document.getElementById('confirmar').value;

        var error = new Array();
        error[0] = "<span style='color:red'> Ingrese el nombre!! </span> ";
        error[1] = "<span style='color:red'> Ingrese el apellido!! </span> ";
        error[2] = "<span style='color:red'> Ingrese el email!! </span> ";
        error[3] = "<span style='color:red'> Ingrese el username!! </span> ";
        error[4] = "<span style='color:red'> Ingrese el password!! </span> ";
        error[5] = "<span style='color:red'> Ingrese la confirmación del password!! </span> ";


        //For each

        for(i in entrada){

            var mensajeError = error[i]
            var ValorArreglo = arreglo[i]

            //Validando Campo Requerido
            

            if(entrada[i]==""){

                document.getElementById(ValorArreglo).innerHTML = mensajeError;

            }

            //Validar Correo
            else if(i==2){
               
                var arroba = entrada[i].indexOf('@');
                var punto = entrada[i].lastIndexOf('.');
                
                if(arroba<1 || punto < arroba +2 || entrada[i].length<punto+2 ){

                    document.getElementById(ValorArreglo).innerHTML = "<span style='color:red'> Ingrese un email valido </span> ";
                }else{

                    document.getElementById(ValorArreglo).innerHTML = " Campo Valido! ";
                }

            }else if(i==5){

                var primero = document.getElementById('password').value;
                var segundo = document.getElementById('confirmar').value;

                if(primero != segundo){

                    document.getElementById('errorConfirmar').innerHTML = "<span style='color:red'> Los password no coinciden </span> ";
                }else{

                    document.getElementById('errorConfirmar').innerHTML = " Campo Valido! ";
                }

            }else{

                document.getElementById(ValorArreglo).innerHTML = " Campo Valido! ";
            }

        }


}

function validarTodos(){

    var contador = 0;
    for(i=0; i<6; i++){

        var ValorArreglo = arreglo[i];
        if(document.getElementById(ValorArreglo).innerHTML == "Campo Valido! "){

            contador++;
        }
    }
    if(contador==6){

        document.getElementById('mensajefinal').innerHTML == " Formulario Validado "

    }

}
