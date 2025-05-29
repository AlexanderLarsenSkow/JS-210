/*
	input: array of arrays, where each array contains numbers.
	output: array with the sum for each small array.

	good use for reduce or map.

	map first: take a total and compute it. Too bad there's no sum method in JavaScript.
*/

function matrixSums(matrices) {
	return matrices.map(function(matrix) {
		return matrix.reduce((acc, number) => number + acc, 0);
	})
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
