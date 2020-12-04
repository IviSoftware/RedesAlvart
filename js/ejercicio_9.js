
var clave=0,minutos=0,cobro=0;
const americaNorte =12,americaCentrar = 15,americaSur = 18 ,europa = 19  , asia =19,africa =25 ,oceania=19;
clave = prompt("Ingrese la clave del numero telefonico de su zona geografica");
clave = parseInt(clave);



function condicionMinutos(primerPrecio,segundoPrecio){
    minutos = prompt("Ingrese las duracion de la llamada en minutos");
    minutos = parseInt(minutos);
    if(minutos >= 4 ){
            cobro = minutos * primerPrecio;
            alert('El costo a pagar de su llamada es de : ' + cobro  + " Pesos");
        }
        else{
            cobro = minutos * segundoPrecio;
            alert('El costo a pagar de su llamada es de : ' + cobro + " Pesos");
        }
}

switch(clave){
    case americaNorte:
        condicionMinutos(2 , 1.5);
        
    break;

    case americaCentrar:
        condicionMinutos(2.2 , 1.8);
    break;

    case americaSur:
        condicionMinutos(4.5 , 3.5);

    break;

    case europa:
    condicionMinutos(3.5 , 2.7 );
    break;

    case asia:
    condicionMinutos(6 , 4.6);
    break;

    case africa:
    condicionMinutos( 6 , 4.6 );

    break;

    case oceania:
    condicionMinutos(5 , 3.9);
    break;

    default:
        alert("Ingreso un  codigo invalido");
    break;
}



