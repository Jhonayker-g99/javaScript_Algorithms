/*EJERCICIO N*36

 Realice la serie de fibonacci
*/

function fibonacci(num) {
  let x = 0;
  let y = 1;
  let result = 0;
  while (x <= num) {
    if (x % 2 !== 0) {
      result += x;
    }
     x += y;
     y = x - y;
  }

  return result;
}

console.log(fibonacci(5))