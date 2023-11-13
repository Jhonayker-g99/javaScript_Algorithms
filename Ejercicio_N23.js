/*EJERCICIO N*23

Realizar un programa que simule un cajero automatico con un saldo inicial de
mil dolares.
*/

let saldoIni = 1000;

let retiro = valor => (valor < saldoIni) ? saldoIni -= valor : "Fondo insuficiente";

let deposito = valor => saldoIni += valor;

function opciones(opc, func){
  if(opc == 1){
  console.log("Ingrese el monto a depositar");
  return "Su saldo total es de " + deposito(func);
}else if(opc == 2){
  console.log("Ingrese el valor a retirar");
    return "Su saldo total es de " + retiro(func);
}else if(opc == 3){
 return "Gracias. Vuelva pronto";
}
}

console.log(opciones(3,250))