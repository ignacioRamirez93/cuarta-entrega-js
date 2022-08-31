
let ropa
let entrada;
let total=0;
let suma =0;
let pantalon=1500;
let remera=1000;
let buzo=2000;
let zapatillas=3000;
let pago;


do{
    ropa=prompt ( "Ingrese el numero de lo que quiere comprar: 1 pantalon; 2 remera; 3 Buzo; 4 Zapatillas");



switch (ropa) { 
    case "1":

        console.log ("Pantalon,valor 1500");
        suma= sumar(total ,pantalon);
      break;

    case "2":

        console.log("Remera, valor 1000");

        suma=sumar(total ,remera);
     break;
    
    
    case "3":

        console.log ("Buzo, valor 2000");
        suma= sumar(total ,buzo);

     break;

     case "4":

        console.log ("zapatillas, valor 3000");

        suma= sumar(total ,zapatillas);


        break;


        default:
            console.log ("no tenemos ese producto");
        }

        total=suma;
        
        console.log (`El total por ahora es: ${total}`);



            entrada= prompt ("ingrese + si quiere seguir comprando si quiere finalizar indique fin");

            while( entrada != "+" && entrada != "fin"){
                entrada= prompt ( "el valor ingresado es invalido ingrese + para seguir sumando o fin para finalizar")
            }

  }while (entrada != "fin");

  console.log (`El precio que tiene que abonar es:  ${total}`);


 

  pago=prompt ("Como va a abonar credito; debito o efectivo");

  while( pago != "credito" && pago != "debito" && pago != "efectivo"){
    pago= prompt ( "el valor ingresado es invalido ingrese credito; debito o efectivo")
}

  if (pago == "credito"){

    console.log (`El pago de ${total} con tarjeta de credito se realizo correctamente`);

  }
  else if (pago == "debito"){

    console.log (`El pago de ${total} con tarjeta de debito se realizo correctamente`);
  }
  else {

    console.log (`El pago de ${total} con efectivo se realizo correctamente`);
  }
  

  


/*----------------------------------------------------------------------------------------*/
  function sumar(sum1, sum2){


    var resultado;


    resultado = parseInt(sum1) + parseInt (sum2);


    return resultado;


}
