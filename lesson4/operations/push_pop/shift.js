/*
	[1, 2, 3]
	[3, 2]
*/

function shift(array) {
	let firstElement = array[0];

	for (let index = 0; index < array.length -1; index++) {
		array[index] = array[index + 1];
	}

	array.length = array.length - 1;
	return firstElement;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]