

//Declaramos las variables y obtenemos los datos del usuario        
var numberOne=0,numberTwo=0,numberThree=0;
var numberOnePositive=false,numberTwoPositive=false,numberThreePositive=false;

numberOne = prompt("Ingresa un numero");
numberOne = parseFloat(numberOne);
numberOnePositive = numberOne > 0;   //Con ayuda de un boleano guardamos en la variable si es mayor que 0 , si esto da false entonces es un numero negativo

numberTwo = prompt("Ingresa un numero");
numberTwo = parseFloat(numberTwo);
numberTwoPositive = numberTwo > 0;

numberThree = prompt("Ingresa un numero");
numberThree = parseFloat(numberThree);
numberThreePositive = numberThree > 0;


if(numberOnePositive && numberTwoPositive && numberThreePositive){ // hacemos la validacion de que todos los numeros seran positivos 
    if(numberOne != numberTwo && numberTwo != numberThree && numberThree !=numberOne ){ // hacemos la validacion de que todos sean numeros diferentes

        //hacemos las diferentes comparaciones 
        if(numberOne > numberTwo){
            if(numberOne > numberThree){
                alert("El numero " + numberOne + " es el mayor");
            }
        }   
        else if(numberThree > numberTwo ){
            if(numberThree > numberOne){
                alert("El numero " + numberThree +  " es el mayor");

            }
        }
        else{
            alert("El numero " + numberTwo + " es el mayor");
        }

    }
    else{ // en caso de que de un false en alguna condicion quiere decir que algun numjero esta repetido por lo tanto mostramos  un anuncion al usuario
        alert("Los tres numeros o dos de ellos son iguales...por favor ingrese tres numeros diferentes")
    }
}
else{ //en caso de que alguna variable haya guardado un false quiere decir que algun  numero es negativoo
    alert("Algún o varios numeros son negativos , por favor solo digite numeros positivos")
}



