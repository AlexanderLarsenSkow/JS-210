/*
Write a function that returns a substring based on a starting index and length.

Problem:
	input: string, starting index of substring, length of substring 
		last two are integers
	
	output: substring

	Use the available characters even if hte length is greater than the string.
	if start is negative, treat it as strLength - start.
	[] and length again
	if the length is less than = 0, return ''

Examples:
let string = 'hello world';

substr(string, 2, 4);      // "llo " 2 4
substr(string, -3, 2);     // "rl" length -3 
substr(string, 8, 20);     // "rld" take all the available characters that we can. 
substr(string, 0, -20);    // "" if the str
substr(string, 0, 0);      // ""

Data Structures:
	return '' if the length is less or equal to 0.
	if the index is negative, the start index is the str length - the start index.

	ternary to decide what the index will be.
	while loop rather than 4 for more complicated index.

	iterate through and add each character to our string.
	return this.
*/

function substr(string, start, length) {
	let index = start < 0 ? string.length + start : start;
	let substr = '';

	while (index < string.length) {
		if (substr.length >= length) break;

		substr += string[index];
		index ++;
	}

	return substr;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""