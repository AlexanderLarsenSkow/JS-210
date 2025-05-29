/*
	Input: array and index integer.
	Output: return element at index

	Rules:
		greater or lower than length will return undefined.
*/

const nthElementOf = (array, index) => array[index];

let digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3));   // returns 16)
console.log(nthElementOf(digits, 8));   // what does this return?) undefined
console.log(nthElementOf(digits, -1));  // what does this return?) undefined