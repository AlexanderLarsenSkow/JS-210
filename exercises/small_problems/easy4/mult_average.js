// Multiplicative Average

/*
Input: array of integers
Output: string multiplicative average.

	Rules:
		multiply every value together, divide by length, take toFixed(3) decimals.
*/

function showMultiplicativeAverage(array) {
	let product = array.reduce((total, num) => total * num, 1);
	return (product / array.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
