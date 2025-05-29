/*
	Input: array, start Index, number of values to remove.

	The function should remove the values from the original array
	then return them in a new array.

	splice is inclusive.

	Examples:
let count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
count;                                 // [ 1, 2, 8 ]
// 

if after the start index and end index, make that element equal index + number of removed values.
	push those values into a new array.
	make the length of the array original array - the number to be removed.
 */

function push(array, element) {
	array[array.length] = element;
	return array.length;
}

	function splice(array, startIndex, numberRemoved) {
		let endIndex = startIndex + numberRemoved - 1;
		let splicedElements = [];

		for (let index = 0; index < array.length; index++) {
			let el = array[index];

			if (index >= startIndex && index <= endIndex) {
				push(splicedElements, el);
				array[index] = array[index + numberRemoved];
			}
		}

		array.length = array.length - numberRemoved;
		return splicedElements;
 	}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]