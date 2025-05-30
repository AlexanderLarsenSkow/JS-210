// Build a function that returns true if the arrays are equal based on values.

function arraysEqual(array1, array2) {
	if (array1.length !== array2.length) return false;

	for (let i = 0; i < array1.length; i++) {
		if (array1[i] !== array2[i]) return false;
	}

	return true;
}

console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false