/*
	input: array
	output: new array with all elements PLUS elements in reverse order.	
*/

function sameElements(array) {
	let newArr = array.slice();

	for (let index = array.length - 1; index >= 0; index--) {
		newArr.push(array[index]);
	}

	return newArr;
}

console.log(sameElements([1, 2, 3, 4])); // [1, 2, 3, 4, 4, 3, 2, 1]


function sameElements2(array) {
	return array.concat(array.slice().reverse());
}

console.log(sameElements2([1, 2, 3, 4])); // [1, 2, 3, 4, 4, 3, 2, 1]