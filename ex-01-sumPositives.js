/**
 * sumPositives()
 *
 *  Write a function called sumPositives that takes an array of numbers and
 *  only adds the positive numbers
 *
*/


// ++ YOUR CODE below


//Escribiendo la función
function sumPositives(numbers){
	var suma = 0;
//Recorre la función
    for (var i = 0; i < numbers.length; i++){  
//Le pido que evalue si el nùmero es positivo, al compararlo con < a 0
      if (numbers[i] > 0){
//Le pido que sume cada nùmero que encuentra en la iteraciòn de cada indice que cumple la condicion
      	suma = suma + numbers[i];
   	  }
    }
    return suma;
}







// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-01');
  console.log('%cFunction: sumPositives', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return 12 in the next [3, -1, 4, 5, -3, -4] series');
console.assert(sumPositives([3, -1, 4, 5, -3, -4]) === 12);

console.log('Should return 170 in the next [-11, 30,-20, 40, 100] series');
console.assert(sumPositives([-11, 30,-20, 40, 100]) === 170);

console.log('Should return 205 in the next [4 ,-10,-30, -4, 201] series');
console.assert(sumPositives([4 ,-10,-30, -4, 201]) === 205);

console.log('\n')
