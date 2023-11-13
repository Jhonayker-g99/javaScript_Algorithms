/*EJERCICIO N*12

Expresion matematica 4.
*/

function valores(a, b){
    
    let x = a;
    let y = b;
    let result = 0;
    
    result = (Math.sqrt(x))/(Math.pow(y, 2)-1);
    
    return `El resultado de la operacion es: ${result}`;
}

console.log(valores(25, 40))