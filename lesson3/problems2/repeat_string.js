// Repeating Strings

/*
	Problem
		Input: string and number of times to repeat the string
		output: string concactenated the number of times.

		if the times isn't a number, return undefined. isInteger
		also if times is negative.
		if 0, return ''.

		cannot use length property of strings.

		repeat('abc', 1);       // "abc" # 1 only does it one time.
		repeat('abc', 2);       // "abcabc" # 2 repeat twice.
		repeat('abc', -1);      // undefined
		repeat('abc', 0);       // ""
		repeat('abc', 'a');     // undefined
		repeat('abc', false);   // undefined
		repeat('abc', null);    // undefined
		repeat('abc', '  ');    // undefined		

Algo:
	if not an integer or negative number, return undefined.
	create empty string
	iterate up to the number times and add the strings for each iteration
	return teh string.

*/

function repeat(string, times) {
	if (!Number.isInteger(times) || times < 0) {
		return undefined;
	}

	repeatString = '';
	for (let count = 0; count < times; count++) {
		repeatString += string;
	}

	return repeatString;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined