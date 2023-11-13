/*EJERCICIO N*26

Realice un programa que lea de la entrada estandar numeros hasta que se introduzca
un cero. En ese momento el programa debe terminar y mostrar en la salida estandar
el numero de valores mayores que ceros leidos.
*/

function contador(a){
 
 let num = a;
 let count = 0;
 
 do{
   
   if(num > 0){
     count++;
   }
   
 }while(num != 0);
 
 return "La cantidad de numeros diferentes de cero es : " + count;
}

console.log(contador(5))