/*
Slice:

3 args: array, start index, end index
return new array starting with value at start index and ending with end index.

Slice is exclusive wiht its end index.
*/

function push(array, element) {
	array[array.length] = element;
	return array.length;
}

function slice(array, start, end) {
	let newArr = [];

	for (let index = 0; index < end; index++) {
		if (index >= start) {
			push(newArr, array[index])
		}
	}

	return newArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]