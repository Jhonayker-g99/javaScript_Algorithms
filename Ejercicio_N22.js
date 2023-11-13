/*EJERCICIO N*22

Cambiar un numero entero con el mismo valor pero en romanos:
 
M = 1000
D = 500
C = 100
X = L
V = 5
I = 1
*/

function numRomano(num){
 
 let number = num;
 let numRom = {
   M: 1000,
   CM: 900,
   D: 500,
   CD: 400,
   C: 100,
   XC: 90,
   L: 50,
   XL: 40,
   X: 10,
   IX: 9,
   V: 5,
   IV: 4,
   I: 1  
 }
 
 //Aseguararse de que el dato que ingrese sea un numero entero
 
 if(typeof number == "string" || !Number.isInteger(number)){
   return null;
 }
 
 //Convertidor.
 
 let romano = "";
 
 for(let i in numRom){
   while(number>=numRom[i]){
     romano += i;
     number -= numRom[i];
   }
 }
 return romano;
}

console.log(numRomano(77));