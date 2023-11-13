/*EJERCICIO N*29.

Escriba un programa que lea valores enteros hasta que se introduzca un valor en el
rango [20-30] o se introduzca el valor 0. El programa debe entregar la suma de los
valores mayores a 0 introducidos.
*/

function cantidades(...num){
  
  let value = [...num];
  let sum = 0;
  
  for(let i = 0; i < value.length; i++){
    do{

      sum += value[i];
    
    }while(value[i] < 20 || value[i] > 30 && value[i] != 0);
  } 
  return "La suma es: " + sum;
}

console.log(cantidades(2, 5))