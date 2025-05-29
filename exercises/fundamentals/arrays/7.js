/*
Unshift and Shift

Unshift: add 1 or more elements at first index. return new length.
Shift: take away at first index. Return removed element.

Mutating.

Examples:

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]

Data Structures:
	Unshift: add 1 or more elements at the first index.
	take a length of the argument array
	iterate through the array, increasing the length. The current elements should be duplicated
		and pushed back. iterate from teh end, not the start.
	Then iterate through the original indicies, changing the values to the value at the same index in
		the arguments array. return the new length at the end.

*/

function unshift(array, ...args) {
	let nElements = args.length;
	array.length += nElements;

	for (let i = array.length - 1; i >= nElements; i--) {
		array[i] = array[i - nElements];
	}

	for (let i = 0; i < nElements; i++) {
		array[i] = args[i];
	}

	return array.length;
}

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

let array = [1, 2, 3];
unshift(array, 4, 5, 6);
console.log(array); // [4, 5, 6, 1, 2, 3]

let arr2 = [4, 5, 6];
unshift(arr2, 6, 5, 4);
console.log(arr2);

// shift removes the first element, returns that element

function shift(array) {
	const firstElement = array[0];
	const newLength = array.length - 1;

	for (let index = 0; index < array.length - 1; index++) {
		array[index] = array[index + 1];
	}

	if (newLength >= 0) {
		array.length = newLength;
	}

	return firstElement;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

let array3 = [1, 2, 3];
shift(array3);
console.log(array3);

const testArray = [1, 2, 3];
shift(testArray);                // 1
console.log(testArray);                       // [2, 3]
unshift(testArray, 5);           // 3
console.log(testArray);                       // [5, 2, 3]