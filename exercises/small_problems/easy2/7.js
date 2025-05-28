/*
Double Doubles

Problem:
	Input: number
	Output: if double number, return same number. Else, * 2.

	double number is even length number whose left side digits are the same as its right side digits.

	Examples:

	44 is double. // 44
	7676 is double // 7676 
	444 is not double. // 888


Data Structures:
	transform the number into a string. Slice the string into 2 halfs.
	if the 2 halfs converted back to a number are equal, it is a double number.
*/

function isDouble(number) {
	let digits = String(number);
	let index2 = Math.floor((digits.length / 2));

	let side1 = digits.slice(0, index2);
	let side2 = digits.slice(index2);
	return Number(side1) === Number(side2);
}

function twice(number) {
	return isDouble(number) ? number : number * 2;
}

console.log(twice(37));        // 74
console.log(twice(44));       // 44
console.log(twice(334433));      // 668866
console.log(twice(444));       // 888
console.log(twice(107));       // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));       // 3333
console.log(twice(7676));       // 7676