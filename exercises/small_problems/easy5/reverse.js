/*
	input: string
	output: string reversed
*/

const reverseSentence = string => string.split(' ').reverse().join(' ');

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

// buggy solution:

// function reverseSentence(string) {
//   return string.split('').reverse().join('');
// }

// The problem with this code is that it splits by the wrong character, an empty string, rather
// than a space. Splitting by a space returns an array of words, whereas splitting by an empty char
// returns an array of singular characters, meaning the words are lost.