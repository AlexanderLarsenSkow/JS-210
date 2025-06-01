/*
	input: 2 arrays
	output: new array with products of every array with same index.

	rules:
		arrays have same number of elements.

	data structures:
		map with an index.
	
	Algo:
		iterate through the first array with map.
		multiply the current num by the index in the other array.
*/

function multiplyList(array1, array2) {
	return array1.map((number, index) => number * array2[index] );
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]