/*EJERCICIO N*8
 
 Itercambio de variables
*/

function valores(a, b){
      
    let x = a;
    let y = b;
    
    x = x+y;
    y = x-y;
    x = x-y;
      
    return `El nuevo valor de x es: ${x}\nEl nuevo valor de y es: ${y}`;
  } 

console.log(valores(45, 65))