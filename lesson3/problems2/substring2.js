/*
Problem:
	input: string, start index, final index
	output: return the substring.

	Rules:
		- if both start and end are positive integers, start is less than end, and both are within
			the string boundary, return the substring. Include hte element at the start, 
			exclude the final element.
		- if the value of start is greater than the end, swap their values and return the substring.
		- if start is equal to end, return '' , will happen naturally.
		- if end index is omitted, return the string from the start.
		- if start or end is NaN or less than 0, it is 0.
		- if start or end is greater than the length, it is equal to length.

Examples:
let string = 'hello world';

substring(string, 2, 4);    // "ll" normal 
substring(string, 4, 2);    // "ll" swapped 
substring(string, 0, -1);   // "" -1 is treated as 0 index.
substring(string, 2);       // "llo world" end index is omitted, so it starts from 2 and finishes.
substring(string, 'a');     // "hello world" 'a' is NaN, so it's 0 index.
substring(string, 8, 20);   // "rld" starts at 8 and just keeps going.

Data Structures:
	isInvalid(start) 
	if the start or end index is not an integer or is less than 0, set them equal to 0.
	if the start is greater than the end, swap their values in a block.

	HELPER makeSubstr(string, start, end)
		create empty str
		create index that is the start, and go until it reaches the end of the string.
		Break out of the loop if the index is equal to the end index.
		return the substr
*/

function isInvalid(index) {
	return (!Number.isInteger(index) && index !== undefined) || index < 0;
}

function substring(string, start, end) {
	if (isInvalid(start)) start = 0;
	if (isInvalid(end)) end = 0;

	if (start > end) {
		[start, end] = [end, start];
	}

	return executeSubstr(string, start, end)
}

function executeSubstr(string, start, end) {
	let substr = '';
	let index = start;

	while (index < string.length) {
		if (index === end) break;
		substr += string[index];
		index++;
	}

	return substr;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));    // "llo world"
console.log(substring(string, 'a'));    // "hello world"
console.log(substring(string, 8, 20));   // "rld"
console.log(substring(string, 30, 40)); // ''