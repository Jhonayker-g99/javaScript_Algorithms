/*EJERCICIO N*11 

Escriba un programa que lea de la entrada estandar los dos catetos de un
triangulo rectangulo y escriba en la salida estandar su hipotenusa.
*/

function valores(a, b){
   
   let ca = a;
   let co = b;
   let hipotenusa = 0;
   
   hipotenusa = Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2));
   hipotenusa.toFixed(4);
   
   return `El valor de la hipotenusa es: ${hipotenusa}`;
}

console.log(valores(25, 25));