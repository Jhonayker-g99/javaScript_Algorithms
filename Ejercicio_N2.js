/*EJECICIO N*2

Escribe un programa que lea de la entrada estandar el precio de un producto y
muestre en la salida estandar el precio del producto al aplicarle el IVA.
*/

function calculoDePrecio(precio, iva){

    let ivaT = 0;
    let total = 0;
    
    ivaT = (precio * iva)/100;
    total = precio + ivaT;
    
    return `El IVA es: ${ivaT}\nEl total a pagar es: ${total}`;
}
console.log(calculoDePrecio(50, 21))