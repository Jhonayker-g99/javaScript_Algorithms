/*EJERCICIO N*25

Realice un programa que solicite de la entrada estandar un entero del uno al diez
y muestre en la salida estandar su tabla de multiplicar.
*/ 

function multiplicacion (num){
 
 for(let i = 1; i <= 12; i++){
   console.log(num + " * " + i + " = " + num*i);
 }
}
console.log(multiplicacion(5))