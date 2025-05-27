/*
	Write a function that takes a string as an argument
	return the string stripped of space from both ends.

	Remove all white space to either end.
	Can only use [] notation and length.

	Find first character.
	Won't work, since one example has 2 spaces between characters.

	If spaces are sandwiched between characters, they must stay.
	otherwise, add current character.


	Think we have to take the length. Try to find the first character and last character.
	iterate through the string. The first character that matches a-z A-Z is first_char.
	Then find the last character, 

	check the length. Iterate down to 0 then up to length - 1. If there are characters in
	both directions, add the space. Else, don't do it.
*/

function checkForChars(side) {
	return side.some(char => /[a-zA-Z]/.test(char));
}

function isSafeSpace(string, index) {
	let leftSide = [];
	let rightSide = [];

	for (let idx = index + 1; idx < string.length; idx++) {
		rightSide.push(string[idx]);
	}

	for (let idx = index - 1; idx > 0; idx--) {
		leftSide.push(string[idx])
	}

	let leftChars = checkForChars(leftSide);
	let rightChars = checkForChars(rightSide);
	return leftChars && rightChars;
}

function trim(string) {
	let trimUp = '';

	for (let i = 0; i < string.length; i++) {
		let char = string[i];

		if (/[a-zA-Z]/.test(char)) {
			trimUp += char;
		}
		else if (isSafeSpace(string, i)) {
			trimUp += char;
		}
	}

	return trimUp;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));    // ""