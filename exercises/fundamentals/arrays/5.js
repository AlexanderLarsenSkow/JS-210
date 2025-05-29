/*
Pop and Push

Problem: pop
	Input: array
	Output: removed element from end of array

	Rules:
		remove last element
		if no elements, return undefined.
		return last element.
*/

function pop(array) {
	let lastIndex = array.length - 1;
	const lastEl = array[lastIndex];

	if (array.length > 0) {
		array.length = array.length - 1;
	}
	
	return lastEl;
}

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push

function push(array, ...elements) {
	let currentLength = array.length;

	elements.forEach(function(element) {
		array[currentLength] = element;
		currentLength++;
	})

	return array.length;
}

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0