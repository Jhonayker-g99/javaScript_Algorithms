/*EJERCICIO N*31

 Escriba un programa que calcule el valor de: 1+3+5+...+2n-1
*/

function number(a){
  
  let n = a;
  let sum = 0;
  
  for(let i = 0; i <= n; i++){
    sum = 2*i-1
  }
  
  return sum;
}

console.log(number(9))