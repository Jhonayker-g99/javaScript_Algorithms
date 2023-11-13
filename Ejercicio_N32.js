/*EJERCICIO N*32

 Escriba un programa que calcule el valor de n!.
*/

function factorial(n){
  
  let num = n;
  let product = 1;
  
  for(let i = 2; i <= num; i++){
    product *= i;
  }
  
  return product;
}

console.log(factorial(5))