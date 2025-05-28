/*
Problem:
	Input: string
	output: string without duplicates.

	Return new string that does not contain duplicate characters.
	You accomplished this! But they should not be CONSECUTIVE LOL.

Examples:
crunch('ddaaiillyy ddoouubbllee');    // "daily double" all dups removed
crunch('4444abcabccba');              // "4abcabcba" 
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
 
Data Structures:
	add to a string. If the string includes the character already, don't add it.
*/

function crunch(string) {
	let noDoubles = '';

	for (let index = 0; index < string.length; index++) {
		let char = string[index];
		let nextChar = string[index + 1];

		noDoubles += char !== nextChar ? char : '';
	}

	return noDoubles;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
