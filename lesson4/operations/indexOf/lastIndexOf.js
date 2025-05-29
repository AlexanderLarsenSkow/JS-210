/*
	Return last index of element:
		if 2 elements, returns index of second
		if 3, 3rd, etc.

	returns - 1 if not found.
*/

function lastIndexOf(array, element) {
	for (let index = array.length -1; index >= 0; index--) {
		if (array[index] === element) return index;
	}

	return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));    //-1