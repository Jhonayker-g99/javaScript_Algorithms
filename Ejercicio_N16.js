/*EJERCICIO N*16

Realice un programa que lea un valor entero y determina si es par o impar.
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');

function valor(num){
  
  let number = num;
  
  if(number == 0){
     return "El numero es cero";  
  }else if(number % 2 == 0){
     return "El numero es par";  
  }else{
     return "El numero es impar";  
  }
}

console.log(valor(0))