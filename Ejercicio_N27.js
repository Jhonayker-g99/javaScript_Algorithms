/*EJERCICIO N*27.

Realice un programa que calcule y muestre en la salida estandar la suma de los
cuadrados de los 10 primeros enteros mayores a cero.
*/

function sumaDeCuadrados(){
 
 let sum = 0;
 let cuadrado;
 
 for(let i = 0; i <= 10; i++){
   cuadrado = i*i;
   sum += cuadrado;
 }
 
 return "El resultado es: " + sum;
}

console.log(sumaDeCuadrados())