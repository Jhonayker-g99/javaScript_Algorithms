/*EJERCICIO N*19

Escriba un programa que lea de la entrada estandar un
caracter e indique en la salida estandar si el caracter es una
vocal minuscula, una vocal mayuscula o no es una vocal.
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');

//Solucion 1.

function vocal(str){
    
 let string = str;
 let regExp = /a|e|i|o|u/;
 let regExpMayus = /A|E|I|O|U/;
 
 if(regExp.test(string)){
    return "La vocal es minuscula";
 }else if(regExpMayus.test(string)){
    return "La vocal es mayuscula";  
 }else{
    return "No es una vocal";  
 }
}

console.log(vocal("a"))

//Solucion 2.

function vocales(str){
 
 let string = str;
 let answer = "";
 
 switch(string){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      answer = "La vocal es minuscula";
      break;
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      answer = "La vocal es mayuscula";
      break;
    default:
      answer = "No es una vocal";
      break;
 }
 return answer;
}

console.log(vocales("A"))