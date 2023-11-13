/*EJERCICIO N*30.

 Escriba un programa que calcule el valor de: 1+2+3+...n
*/

function number(a){
  
  let n = a;
  let sum = 0;
  
  for(let i = 0; i <= n; i++){
    sum += i;
  }
  
  return "La suma es: " + sum;
}

console.log(number(5))