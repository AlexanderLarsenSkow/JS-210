/* 
	Stringy Strings

	Problem:
		Input: positive integer
		output: string of 1s and 0s

		Rules:
			length matches the integer
			always starts with 1.

		Examples:
		
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
// 

Data Structures:
	loop from 1 to the top number. If the number is odd, do 1. If not, do 0.
 */

function stringy(max) {
	let numbers = '';

	for (let count = 1; count <= max; count++) {
		numbers += count % 2 === 1 ? '1' : '0';
	}

	return numbers;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
