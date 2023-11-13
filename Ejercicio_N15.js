/*EJERCICIO N*15

Escriba un programa que lea tres numeros y determine cual de ellos es el mayor.
*/

function valores(a, b, c){
  
  let n1 = a;
  let n2 = b;
  let n3 = c;
  
  if(n1==n2 && n2==n3){
    return "Los tres numeros son iguales";  
  }else if(n1>n2 && n1>n3){
    return `El numero mayor es ${n1}`;  
  }else if(n2>n1 && n2>n3){
    return `El numero mayor es ${n2}`;  
  }else{
    return `El numero mayor es ${n3}`;
  }
}

console.log(valores(10, 100, 1000))