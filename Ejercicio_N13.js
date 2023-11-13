/*EJERCICIO N*13.

 Escriba un programa que calcule las soluciones de una ecuacion de segundo grado
 de la forma ax^2 + bx + c = 0.

*/

function valores(numA, numB, numC){
  
  let a = numA;
  let b = numB;
  let c = numC;
  let x1 = 0;
  let x2 = 0;
  
  x1 = (-b + Math.sqrt((Math.pow(b, 2) - 4*a*c))/(2*a));
  x2 = (-b - Math.sqrt((Math.pow(b, 2) - 4*a*c))/(2*a));
  
  
  return `El valor de x1 es: ${x1}\nEl valor de x2 es: ${x2}`;
}

console.log(valores(16, 8, 2))