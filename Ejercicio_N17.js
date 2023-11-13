/*EJERCICIO N*17

Comprobar si un numero es positivo o negativo.
*/

function valores(num){
  
  let number = num;
  
  if(number == 0){
     return "El numeo es cero";  
  }else if(number > 0){
     return "El numero es positivo";  
  }else{
     return "El numero es negativo";  
  }
}

console.log(valores(25))