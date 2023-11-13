/*EJERCICIO N*34

 Escriba un programa que calcule el valor de: 2^1+2^2+2^3+...+2^n.
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');

function calculo(num){
  
  let number = num;
  let suma = 0;
  let elev = 0;
  
  for(let i = 1; i <= number; i++){
    elev = Math.pow(2, i);
    suma += elev;
  }
  
  return suma;
}

console.log(calculo(4))