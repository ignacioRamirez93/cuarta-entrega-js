
let ropa
let entrada;
let total=0;
let suma =0;
let pago;
let producto = [ "1 - Pantalon", "2 - Remera", "3 - Buzo","4 - Zapatillas"];
const carrito = [];
const listaproductos= producto.join("\n");
 

 
 console.log (listaproductos);



do{
    ropa=prompt ( `Ingrese el numero de lo que quiere comprar:\n${listaproductos}` );

    producto[0]=1500;
    producto[1]=1000;
    producto[2]=2000;
    producto[3]=3000;

    

switch (ropa) { 
    case "1":

        console.log (`Pantalon, valor ${producto[0]}`);
        suma= sumar(total ,producto[0]);

        carrito.push("Pantalon");
        
      break;

    case "2":

        console.log(`Remera, valor ${producto[1]}`);
        suma=sumar(total ,producto[1]);

        carrito.push("Remera");
     break;

    case "3":

        console.log (`Buzo, valor ${producto[2]}`);
        suma= sumar(total ,producto[2]);

        carrito.push("Buzo");
        


     break;

     case "4":

        console.log (`zapatillas, valor ${producto[3]}`);
        suma= sumar(total ,producto[3]);

        carrito.push("Zapatillas");
        


        break;


        default:
            console.log ("no tenemos ese producto");
        }

        console.log(`Productos selecionados:\n${carrito.join("\n")}`);



        total=suma;

       
       
        console.log (`Total: ${total}`);
       



            entrada= prompt ("ingrese + si quiere seguir comprando si quiere finalizar indique fin");

            while( entrada != "+" && entrada != "fin"){
                entrada= prompt ( "el valor ingresado es invalido ingrese + para seguir sumando o fin para finalizar")
            }

  }while (entrada != "fin");

  

  if (total == 0){

    console .log ("No seleciono ningun producto")
  }
  else{
    

  console.log (`El precio que tiene que abonar es:  ${total}. \n Por los productos : ${carrito.join("\n")} `);

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
  


  }
 

 
  


/*----------------------------------------------------------------------------------------*/
  function sumar(sum1, sum2){


    var resultado;


    resultado = parseInt(sum1) + parseInt (sum2);


    return resultado;


}
