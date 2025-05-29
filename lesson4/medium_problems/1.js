/*
	input: array
	output: new array with odd index positioned elements in first array
*/

function oddElementsOf(array) {
	let oddArray = [];

	for (let index = 0; index < array.length; index++) {
		if (index % 2 === 1) {
			oddArray.push(array[index]);
		}
	}

	return oddArray;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]