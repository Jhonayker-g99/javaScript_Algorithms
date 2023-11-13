/*EJERCICIO N*33

 Escriba un programa que calcule el valor de: 1!+2!+3!+...n!.
*/

function factorial(n){
  
  let num = n;
  let producto = 1;
  let suma = 0;
  
  for(let i = 1; i <= num; i++){
    producto *= i;
    suma += producto;
  }
  
  return suma;
}

console.log(factorial(5))