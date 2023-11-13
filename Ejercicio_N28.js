/*EJERCICIO N*28

Escribe un programa que tome cada cuatro horas la temperatura exterior, leyendola
durante un periodo de 24 HORAS. Es decir, debe leer 6 temperaturas. Calcule la temperatura media del dia,
la temperatura mas alta y la mas baja.
*/

//SOLUCION N*1
function temperatura(...num){
 
 let temp = [...num];
 let tempA = 0;
 let tempB = 9999;
 let tempM = 0;
 
 temp.map(item =>{
   
   //Temperatura alta
   if(tempA < item){
     tempA = item;
   }
   
   //Temperatura baja
   if(tempB > item){
     tempB = item;
   }
   
   //Temperatura media
   tempM += item/6;
 });
 
 return `La temperatura alta es: ${tempA}°C\nLa temperatura baja es: ${tempB}°C\nLa temperatura media es: ${tempM.toFixed(1)}°C`
}

console.log(temperatura(8, 5, 4, 7, 9, 6));


//SOLUCION N*2
function temperatura(...num){
 
 let temp = [...num];
 let tempA = 0;
 let tempB = 9999;
 let tempM = 0;
 
 for(let i = 0; i < temp.length; i++){
   
   //Temperatura alta
   if(tempA < temp[i]){
     tempA = temp[i];
   }
   
   //Temperatura baja
   if(tempB > temp[i]){
     tempB = temp[i];
   }
   
   //Temperatura media
   tempM += temp[i]/6;

 }
 
 return `La temperatura alta es: ${tempA}°C\nLa temperatura baja es: ${tempB}°C\nLa temperatura media es: ${tempM.toFixed(1)}°C`
}

console.log(temperatura(18, 25, 4, 17, 19, 6));


//SOLUCION N*3
function temperatura(...num){
 
 let temp = [...num];
 let tempA = 0;
 let tempB = 9999;
 let tempM = 0;
 
 for(let grad of temp){
   
   //Temperatura alta
   tempA < grad ? tempA = grad : tempA;
   
   //Temperatura baja
   tempB > grad ? tempB = grad : tempB;
   
   //Temperatura media
   tempM += grad/6;

 }
 
 return `\nLa temperatura alta es: ${tempA}°C\nLa temperatura baja es: ${tempB}°C\nLa temperatura media es: ${tempM.toFixed(1)}°C`
}

console.log(temperatura(18, 25, 4, 37, 19, 6));