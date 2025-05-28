// UTF-16

/*
	Calculate the total value of the UTF-16 value of every character in the string.

	split the string in to an array of characters. Map it. Reduce it.

*/

function utf16Value(string) {
	const codes = string.split('').map(char => char.charCodeAt(0));
	return codes.reduce((acc, code) => acc + code, 0);
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811