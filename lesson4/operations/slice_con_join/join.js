/*
Problem:
	Input: array and string
	output: string where every element is joined by that string element.

	Rules:
		The separator is not added after the last element.
		Assume there is always a separator.
*/

function join(array, seperator) {
	let joinedString = '';
	let lastIndex = array.length - 1;

	for (let index = 0; index < array.length; index++) {
		let chars = String(array[index]);
		let element = index !== lastIndex ? chars + seperator : chars;

		joinedString += element;
	}

	return joinedString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
