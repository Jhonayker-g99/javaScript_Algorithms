/*EJERCICIO N*21

Escribe un programa que lea de la entrada estandar tres numeros. Despues debe leer 
un cuarto numero e indicar si el numero coincide con algunos de los introducidos
con anterioridad.
*/

function digitos(a, b, c, d){
 
 let num1 = a;
 let num2 = b;
 let num3 = c;
 let num4 = d;
 
 if(num4==num1||num4==num2||num4==num3){
   return "Coincide con una de las cantidades";  
 }else{
   return "No coincide con ninguna de las catidades";
 }
}

console.log(digitos(2,5,3,15))