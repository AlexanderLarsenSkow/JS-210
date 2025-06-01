/*
	input: non empty string
	output: middle char of the string

	Rules:
		odd length - return one character
		even length - return two characters.

	Examples:
		centerOf('I Love JavaScript'); // "a" 8 is middle, odd number length 17 length
		centerOf('Launch School');     // " " 13 length, index 6 is taken.
		centerOf('Launch');            // "un" 6 length, 2 and 3
		centerOf('Launchschool');      // "hs" length 12, 5 and 6
		centerOf('x');                 // "x"	length 1, return 1

	Data Structures:
		none

		Math.ceil(length / 2) + 1
		
		algo:
			if the string is length 1 or 2, return the string.
			iterate through. 
			if the length is odd, return the element at the index that equals length / 2
			if the length is even, return elements at length / 2 and length / 2 + 1
*/

function findMiddle(string, index, char) {
	return index === Math.floor((string.length / 2)) ? char : '';
}

function centerOf(string) {
	if (string.length <= 2) return string;
	let middle = '';

	for(let index = 0; index < string.length; index++) {
		let char = string[index];
		let second = findMiddle(string, index, char);

		if (string.length % 2 === 1) {
			middle += second;
		} else {
			let first = index === Math.floor((string.length / 2) - 1) ? char : '';

			middle += second + first;
		}
	}

	return middle;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"