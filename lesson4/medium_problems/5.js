/*
	input: array
	output: new array where all dupes are gone.
*/

function uniqueElements(array) {
	let uniqueEls = [];

	for (let i = 0; i < array.length; i++) {
		if (!uniqueEls.includes(array[i])) {
			uniqueEls.push(array[i]);
		}
	}

	return uniqueEls;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
