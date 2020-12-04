function  descuentos(){

let Ingreso =0 , Categoria=0, descuento =0;

let total = document.getElementById('totalTxt').value;
total = parseFloat(total);

let categoria = document.getElementById('categoriaTxt').value;
categoria = parseInt(categoria);

let consulta = document.getElementById('resultadoConsulta');

if(categoria >= 0 && total >= 0 ){

        switch(categoria)
        {
            case 1:
                total = total - (total * .35);

                consulta.innerHTML = "El total con el 35% de descuento es de " + total;  
                break;

            case 2:
                total = total - (total * .22);

                consulta.innerHTML = "El total con el 22% de descuento es de " + total;
                break;

            case 3:
                total = total - (total * .15);

                consulta.innerHTML = "El total con el 15% de descuento es de " + total;
                break;

            case 4:

                total = total - (total * .05);

                consulta.innerHTML = "El total con el 5% de descuento es de " + total;

                break;
            default:
            alert('No existe esa categoria')
            break;
        }
    }
    else{
        alert('No se permiten valores negativos o nulos')
    }

}

