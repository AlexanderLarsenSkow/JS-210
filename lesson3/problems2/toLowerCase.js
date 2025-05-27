/*

let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

Rules:
	input: string of characters
	output: lowercase string of characters

	return the string all lowercase.
	Be careful not to change any characters.

	Can only use bracket notation and length property of strings

Examples:
	toLowerCase('ALPHABET');    // "alphabet"	 all caps everything lower
	toLowerCase('123');         // "123" numbers, just returning the same string.
	toLowerCase('abcDEF');      // "abcdef"	some lower, some upper.

Data Structures:
	iterate through string, if character is an uppercase letter, do the char code treatement
	else, do nothing with the character.
	return the new string	
*/

function lowerIt(char) {
	const CONVERSION_OFFSET = 32;

	let asciCode = char.charCodeAt(0);
	return String.fromCharCode(asciCode + CONVERSION_OFFSET);
}

function toLowerCase(string) {
	let lowerString = '';

	for (let index = 0; index < string.length; index++) {
		let char = string[index]
		
		if (/[A-Z]/.test(char)) {
			lowerString += lowerIt(char);
		} else {
			lowerString += char;
		}
	}

	return lowerString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));     // "123"
console.log(toLowerCase('abcDEF'));     // "abcdef"