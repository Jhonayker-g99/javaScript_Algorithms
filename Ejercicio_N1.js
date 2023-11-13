/*EJERCICIO N*1

Escribe un programa que lea de la entrada estandar dos numeros y
muestre en la salida estandar su suma, resta, multiplicacion y division. 
*/

let suma = (n1, n2) => {
    return `La suma es: ${n1 + n2}`;
}

let resta = (n1, n2) => {
    return `La resta es: ${n1 - n2}`;
}

let multiplicacion = (n1, n2)=> {
    return `La multiplicacion es: ${n1 * n2}`;
}

let division = (n1, n2) => {
    return `La division es: ${n1 / n2}`;
}

console.log(suma(5,2))
console.log(resta(5,2))
console.log(multiplicacion(5,2))
console.log(division(5,2))