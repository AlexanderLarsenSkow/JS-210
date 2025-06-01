/*
	input: string
	output: string with every consonant doubled.
*/

function doubleConsonants(string) {
	return string.split('')
		.map(char => /[aeiou\W\s_]/.test(char) ? char : char.repeat(2))
		.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

function doubleConsonants2(string) {
	return [...string].reduce(function(doubler, char) {
		return doubler += /[aeiou\W\s_]/.test(char) ? char : char.repeat(2);
	}, '')
}
console.log(doubleConsonants2('String'));          // "SSttrrinngg"
console.log(doubleConsonants2('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants2('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants2(''));                // ""
