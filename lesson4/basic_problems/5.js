/*
	input: array, count

	count represents number of first elements to pass into a new array.

	[1, 2, 3, 4] 2 => [1, 2]
*/

function firstNOf(array, count) {
	let firstElements = [];

	for (let index = 0; index < count; index++) {
		firstElements.push(array[index]);
	}

	return firstElements;
}

// simpler version

const firstNOf2 = (array, count) => array.slice(0, count);

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

let digits2 = [4, 8, 15, 16, 23, 42];
console.log(firstNOf2(digits2, 3));    // returns [4, 8, 15]
