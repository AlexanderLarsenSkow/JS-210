/*
Short Long Short

Problem:
	input; two strings
	determine length of both strings.

	add short long short.
*/

function shortLongShort(str1, str2) {
	let length1 = str1.length;
	let length2 = str2.length;

	const max = Math.max(length1, length2);
	const short = length1 === max ? str2 : str1;
	const long = short === str1 ? str2 : str1;

	return short + long + short;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc")
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh")
console.log(shortLongShort('', 'xyz'));         // "xyz")