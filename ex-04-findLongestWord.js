/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("i like books full of dogs") should return "books"
 *
**/

// ++ YOUR CODE below

//Declaramos otro funciòn que nos ayudarà con el split a eliminar la comilla de cada palabra que pase por ella
//Despues de eliminar comilla volvemos a juntar con join y aplicamos length, pues lo emplearemos para comparar la longitud de la palabra que entrarà en esta función
function palabraSinSimbolo(palabra){
	return palabra.split("'").join("").length;
}


//Se declara la función
function findLongestWord(frase){
	//Dividimos el string en un array
	var palabras = frase.split(" ");
	var palabraLarga = palabras[1];
	//Hacemos la iteraciòn sobre el array 
	for(var i = 0; i < palabras.length; i++) {
	//Si la logitud de alguna palabra de ese array que ya pasò por la funciòn de arriba es mayor a cero o a la longitud de la palabra previamente guardada que tambien haya pasado por la funcion
     if (palabraSinSimbolo(palabras[i]) > palabraSinSimbolo(palabraLarga)){
     	//la variable serà igual a la palabra anteriormente identificada
     	palabraLarga = palabras[i];
     }
	}
	
	return palabraLarga;
		
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
