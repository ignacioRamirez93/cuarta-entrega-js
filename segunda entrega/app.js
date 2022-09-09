let ropa;
let entrada;
let total = 0;
let suma = 0;
let resta = 0;
let pago;
let producto = [
  { id: 1, tipo: "Pantalon", precio: 1500 },
  { id: 2, tipo: "Remera", precio: 1000 },
  { id: 3, tipo: "Buzo", precio: 2000 },
  { id: 4, tipo: "Zapatillas", precio: 3000 },
];
const carrito = [];
let productoaeliminar;

for (let tipo of producto) {
  console.log(`ID Producto: ${tipo.id}`);
  console.log(tipo.tipo);
  console.log(tipo.precio);
}

do {
  ropa = prompt("Ingrese el ID del producto que desea comprar");

  switch (ropa) {
    case "1":
      console.log(`Pantalon, valor ${producto[0].precio}`);
      suma = sumar(total, producto[0].precio);

      carrito.push("pantalon");
      break;

    case "2":
      console.log(`Remera, valor ${producto[1].precio}`);
      suma = sumar(total, producto[1].precio);

      carrito.push("remera");
      break;

    case "3":
      console.log(`Buzo, valor ${producto[2].precio}`);
      suma = sumar(total, producto[2].precio);

      carrito.push("buzo");
      break;

    case "4":
      console.log(`zapatillas, valor ${producto[3]}`);
      suma = sumar(total, producto[3].precio);

      carrito.push("zapatillas");
      break;

    default:
      console.log("no tenemos ese producto");
  }

  console.log(`Productos selecionados:\n${carrito.join("\n")}`);

  total = suma;

  console.log(`Total: ${total}`);

  entrada = prompt("ingrese + si quiere seguir comprando si quiere finalizar indique fin");

  while (entrada != "+" && entrada != "fin") {
    entrada = prompt("el valor ingresado es invalido ingrese + para seguir sumando o fin para finalizar");
  }

} while (entrada != "fin");

if (total == 0) {
  console.log("No seleciono ningun producto");
} else {
  console.log(`Carrito :\n ${carrito.join("\n")}`);

  let consulta = prompt("Si desea eliminar un producto del carrito indique si en caso que no lo desee indique no");

  while (consulta != "si" && consulta != "no") {
    consulta = prompt("el valor ingresado es invalido ingrese si para eliminar o no para continuar con su compra");
  }

  if (consulta == "si") {
    do {
      let eliminar = (baja) => {
        let i = carrito.indexOf(baja);

        if (i != -1) {
          carrito.splice(i, 1);
        }
      };

      productoaeliminar = prompt(`indique el nombre del producto que desea eliminar \n${carrito.join("\n")}`);

      if (productoaeliminar == "pantalon" && carrito.indexOf("pantalon") > -1) {
        eliminar(productoaeliminar);
        resta = restar(total, producto[0].precio);

      } else if (productoaeliminar == "remera" && carrito.indexOf("remera") > -1) {
        eliminar(productoaeliminar);
        resta = restar(total, producto[1].precio);

      } else if (productoaeliminar == "buzo" && carrito.indexOf("buzo") > -1) {
        eliminar(productoaeliminar);
        resta = restar(total, producto[2].precio);

      } else if (productoaeliminar == "zapatillas" && carrito.indexOf("zapatillas") > -1) {
        eliminar(productoaeliminar);
        resta = restar(total, producto[3].precio);

      } else {
        console.log("El producto ingresado no se encuentra en el carrito");
      }

      console.log(`Carrito :\n${carrito.join("\n")}`);

      total = resta;

      console.log(`Total: ${total}`);

      entrada = prompt(
        " indique si para eliminar otro producto  o no para finalizar la compra"
      );

      while (entrada != "si" && entrada != "no") {
        entrada = prompt("el valor ingresado es invalido indique si para eliminar otro producto  o no para finalizar la compra");
      }
      
    } while (entrada != "no");
  } else {
    console.log("no elimino ningun producto");
  }

  if (total > 0) {
    console.log(
      `El precio que tiene que abonar es:  ${total}. \n Carrito :\n ${carrito.join(
        "\n"
      )} `
    );

    pago = prompt("Como va a abonar credito; debito o efectivo");

    while (pago != "credito" && pago != "debito" && pago != "efectivo") {
      pago = prompt(
        "el valor ingresado es invalido ingrese credito; debito o efectivo"
      );
    }

    if (pago == "credito") {
      console.log(
        `El pago de ${total} con tarjeta de credito se realizo correctamente`);

    } else if (pago == "debito") {
      console.log( `El pago de ${total} con tarjeta de debito se realizo correctamente`);

    } else {
      console.log(`El pago de ${total} con efectivo se realizo correctamente`);
    }

  } else {
    console.log("no tiene productos en el carrito");
  }
}

/*----------------------------------------------------------------------------------------*/
function sumar(sum1, sum2) {
  var resultado;

  resultado = parseInt(sum1) + parseInt(sum2);

  return resultado;
}

/*-----------------------------------------------------------------------------------*/
function restar(res1, res2) {
  var resultado;

  resultado = parseInt(res1) - parseInt(res2);

  return resultado;
}
