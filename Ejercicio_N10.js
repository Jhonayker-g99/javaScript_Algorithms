/*EJERCICIO N*10

La calificacion final de un estudiante es la media pomderada de tres notas
la nota de practicas que cuenta un 30% del total, la nota teorica que cuenta
un 60% y la nota de participacion que cuenta el 10% restante. Escriba un programa
que lea de la entrada estandar las tres notas de un alumno y escriba en la salida
estandar su nota final.
*/

function notaDelAlumno(a, b, c){
   
   let practica = a;
   let teorica = b;
   let participacion = c;
   let notaFinal = 0;
   
   practica *= 0.30;
   teorica *= 0.60;
   participacion *= 0.10;
   
   notaFinal = practica + teorica + participacion;
   
   notaFinal.toFixed(4);
   
   return `La nota final del alumno es: ${notaFinal}`;
}

console.log(notaDelAlumno(15, 18, 12));