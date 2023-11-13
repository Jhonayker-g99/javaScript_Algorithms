/*EJERCICIO N*35

 Hacer un programa que calcule el resultado de la siguiente expresion: 
 1-2+3-4+5-6...n
*/

function calculo(num){
  
  let number = num;
  let par = 0, impar = 0;
  let suma = 0;
  
  for(let i = 0; i <= number; i++){
    if(i % 2 == 0){
      par = i * -1;
    }else{
      impar += i;
    }
    suma = par + impar;
  }
  return suma;
}
console.log(calculo(10))