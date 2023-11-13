/*EJERCICIO N*3
 
  Escriba un programa que lea de la entrada estandar los siguientes
  datos de un persona:
  
    -Edad: dato tipo entero.
    -Sexo: dato tipo caracter.
    -Altura: dato de tipo float

  Tras leer los datos, el programa debe mostrarlos en la salida estandar.
*/

function datos(edad, sexo, altura){
  let edad = edad;
  let sexo = sexo;
  let altura = altura;
  
  return `Edad: ${edad}\nSexo: ${sexo}\nAltura: ${altura}`;
}

// Segunda solucion utilizando objeto.

let dato = {};

function datos(edad, sexo, altura){
    
     dato.edad = edad;
     dato.sexo = sexo;
     dato.altura = altura;
    
    return dato;
}

console.log(datos(25, "masculino", 1.98))