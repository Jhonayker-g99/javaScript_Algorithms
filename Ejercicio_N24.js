/*EJERCICIO N*24

Realizar un menu que considere las siguientes opciones: 
  
caso 1: cubo de un numero.
caso 2: numero par o impar.
salir.
*/

function valores(opc, num){

let number = num;
let answer = "";
let poten = Math.pow(number, 3);

switch(opc){
 case 1:
   answer = `El cubo de ${number} es ${poten}`;
   break;
 case 2:
   if(num % 2 == 0){
     answer = `El valor ${number} es un numero par`;
   }else{
     answer = `El valor ${number} es un numero impar`;
   }
   break;
 case 3:
   answer = "Sesion finalizada";
   break;
 }
 return answer;
}
console.log(valores(3,))