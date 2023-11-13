/*EJERCICIO N*14

 Escribe un programa que lea dos numeros y determine cual de ellos es el mayor.
*/

function valores(a, b){
     
     let n1 = a;
     let n2 = b;
     
     if(n1==n2){
       return "Ambos numeros son iguales";
     }else if(n1>n2){
       return `El numero mayor es ${n1}`;
     }else{
       return `El numero mayor es ${n2}`;
     }
}

console.log(valores(25, 12));
