/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("i like books full of dogs") should return "books"
 *
**/

// ++ YOUR CODE below

//Se declara la función
function findLongestWord(frase){
	//Dividimos el string en un array
	var palabras = frase.split(" ");
	var length = 0;
	var palabraLarga = "";
	//Hacemos la iteraciòn sobre el array 
	for(var i = 0; i < palabras.length; i++) {
	//Si la logitud de alguna palabra de ese array es mayor a cero o a la longitud de la palabra previamente guardada
     if (palabras[i].length > length){
     	//entonces la variable length asumirà la longitud de esa palabra, para que en la iteraciòn se siga comparando
     	length = palabras[i].length;
     	//la variable serà igual a la palabra anteriormente identificada
     	palabraLarga = palabras[i]
     }
	}
	
	console.log(palabraLarga);
	
	
}







// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-04');
  console.log('ex-04\n%cFunction: findLongestWord', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return "baskets" from "I have baskets full of lemons"');
console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')

console.log('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')

//  punctuation should NOT be included in the evaluation for the longest word
console.log('Should return "Texas" from "don’t mess with Texas"');
console.assert(findLongestWord("don't mess with Texas") === 'Texas')

console.log('Should return "time" from "a time to act."');
console.assert(findLongestWord('a time to act.') === 'time')

console.log('\n')
