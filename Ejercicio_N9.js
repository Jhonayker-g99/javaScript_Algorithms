/*EJERCICIO N*9.

Escribe un programa que lea la nota final de cuatro alumnos y
calcule la nota final media de los cuatro alumnos.
*/

function valores(a, b, c, d){
   
   let nota1 = a;
   let nota2 = b;
   let nota3 = c;
   let nota4 = d;
   let promedio = (nota1+nota2+nota3+nota4)/4;
   
   return `La nota final media de los cuatro alumnos es: ${promedio}`;
}

console.log(valores(18, 20, 19, 17))