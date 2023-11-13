/*EJERCICIO N*18

  Escriba un programa que lea de la entrada estandar un caracter e
  indique en la salida estandar si el caracter es una vocal minuscula o no.
*/

//Solucion 1.

function letras(str){
  
  let string = str;
  let regExp = /a|e|i|o|u/;
  
  if(regExp.test(string)){
    return "Es una vocal minuscula";  
  }else{
    return "No es una vocal minuscula";  
  }
}

console.log(letras("a"))

//Solucion 2.

function vocal(str){
  
  let char = str;
  let answer = "";
  
  switch(char){
     case 'a':
     case 'e':
     case 'i':
     case 'o':
     case 'u':
       answer = "Es una vocal minuscula";
       break;
     default:
        answer = "No es una vocal minuscula";
       break;
  }
  return answer;
}

console.log(vocal("A"))
