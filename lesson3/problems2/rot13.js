/*
Rot 13:

Problem:
	input: string
	output: string that has been transformed by cipher.

	Rules:
		- If a character is an english alphabet character, change it to the character 13 letters later.
			- if you reach the end of the alphabet, return to the beginning.
		- Letter transformations preserve case. A becomes N while a becomes n
		- Don't modify characters that are not letters.

		Examples: 
			a goes to n
			A goes to N
			o goes to b
			O goes to B

	Data Structures:
		Declare constants for different pieces.
		ROT_AMOUNT = 13;
		UPPERCASE_START = 65;
		UPPERCASE_END = 90;
		LOWERCASE_START = 97;
		LOWERCASE_END = 122;

		Algo
		Take a character's charCode, iterate plus 13 to it. If the end is greater than the end of the type
			it matches to, reset the value of the variable to the lower constant.
			Add 13, if its greater than the end, - the end from the new value, add this to the next set.

		If it matches an uppercase, it starts again at the UPPERCASE START.
*/

const ROT_AMOUNT = 13;

const UPPERCASE_START = 65;
const UPPERCASE_END = 90;
const LOWERCASE_START = 97;
const LOWERCASE_END = 122;

const isUpperCase = char => /[A-Z]/.test(char);
const isLetter = char => /[a-zA-Z]/.test(char);

function rot13(message) {
	let cipher = '';

	for (let index = 0; index < message.length; index++) {
		let char = message[index]
		cipher += isLetter(char) ? rotate(char) : char;
	}

	return cipher;
}

function rotate(char) {
	let asciiCode = char.charCodeAt(0);
	let cipherCode = asciiCode + ROT_AMOUNT;

	if (cipherCode > LOWERCASE_END) {
		cipherCode = LOWERCASE_START + (cipherCode % LOWERCASE_END) - 1;
	} 
	else if (cipherCode > UPPERCASE_END && isUpperCase(char)) {
		cipherCode = UPPERCASE_START + (cipherCode % UPPERCASE_END) - 1;
	}
	
	return String.fromCharCode(cipherCode);
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.