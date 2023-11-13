/*EJERCICIO N*20

 Escriba un programa que solicita una edad e indique en la salida estandar si la
 edad introducida esta en el rango [18-25]
*/

function edad(num){
  
  let number = num;
  
  if(number>=18 && number<=25){
    return "Su edad esta dentro del rango";  
  }else{
    return "Su edad no esta dentro del rango";
  }
}

console.log(edad(28))