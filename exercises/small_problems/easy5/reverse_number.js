/*
	input: integer
	Output: same integer iwth reversed digits

	reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped! totally converting back to integer.
reverseNumber(1);        // 1

data structures:
	array

algo:
	considering 0's are dropped, that means that we are converting to an integer outside of an array,
	not inside with something like map.

take the string, split into an array, reverse it, join it, then parse it to integer.
*/

function reverseNumber(number) {
	let reverseString = String(number).split('')
		.reverse()
		.join('');

	return parseInt(reverseString, 10);
}

console.log(	reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));      // 1