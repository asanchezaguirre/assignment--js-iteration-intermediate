/**
 * hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as an argument
 * and returns a boolean if it has a word with double letters.
 *
 *    hasDoubleLetters('matter')
 *     => true // the tt are double-letters
 *
 *    hasDoubleLetters('chopper')
 *       => true // the pp are double-letters
 *
 *    hasDoubleLetters('mister')
 *      => false  // no double letters
 *
 *    hasDoubleLetters('demand')
 *      => false // the double-letters have to be next to eachother
**/

// ++ YOUR CODE below

//Declarar la funciòn
function hasDoubleLetters(word){	
	var text = false;
/*El string lo convertimos en minùsculas, pues de no hacerlo, nos marcarà error en la ùltima
ya que es una mayùscula y minùscula y la identificarà como diferentes*/
	word = word.toLowerCase();
//Hacemos el recorrido
    for (var i = 0; i < word.length; i++){  
/*Si dentro de los indices del array identifica uno igual igual
al ìndice inmediato siguiente, entonces le pedimos nos mande el boolean true.*/
      if (word[i] === word[i+1]){
      	text = true;
      }
    }
    return text
}








// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-02');
  console.log('%cFunction: hasDoubleLetters', 'background-color: green; color: white')
console.groupEnd();

  console.log('Should return true for arg input "shutter"');
  console.assert(hasDoubleLetters('stutter') === true)

  console.log('Should return false for arg input "prospect"');
  console.assert(hasDoubleLetters('prospect') === false)


  console.log('Should return false for arg input "shoehorn"');
  console.assert(hasDoubleLetters('shoehorn') === false)

  console.log('Should return true for arg input "Aardvark"');
  console.assert(hasDoubleLetters('Aardvark') === true)

console.log('\n')
