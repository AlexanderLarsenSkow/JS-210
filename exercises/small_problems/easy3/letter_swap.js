/*
	input: string of words
	output: swap first and last letter of every word.

	Rules:
		lots of assumptions, easy as possible

	Examples:
		swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
		swap('Abcde');                          // "ebcdA"
		swap('a');                              // "a"

	Data Structures:
		split into an array of words.
		map the array.
		If the character is the char in the word, then replace it with last.
		if character is last char in the word, replace with first.
		else, keep the same character.
		join the string back together.	
*/

function swapChars(word) {
		let index = -1;
		let firstChar = word[0];
		let lastChar = word[word.length - 1];

		return word.split('').map(function(char) {
			index++;
			
			if (index === 0) {
				return lastChar;
			}
			else if (index === word.length - 1) {
				return firstChar;
			} else {
				return char;
			}
		}).join('')
}

function swap(words) {
	words = words.split(' ');
	let splitWords = words.map(function(word) {
		return swapChars(word);
	})

	return splitWords.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(	swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                    // a      
