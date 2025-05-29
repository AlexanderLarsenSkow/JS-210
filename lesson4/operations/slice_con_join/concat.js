/*
	concat takes two arrays and adds them together.
	new array.
*/

function push(array, element) {
	array[array.length] = element;
	return array.length;
}

function addElements(array, newArray) {
	for (let index = 0; index < array.length; index++) {
		push(newArray, array[index])
	}
}

function concat(array1, array2) {
	let newArr = [];
	addElements(array1, newArr);
	addElements(array2, newArr);

	return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]