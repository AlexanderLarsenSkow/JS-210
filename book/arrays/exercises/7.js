let array = [3, 5, 7];

function sumOfSquares(array) {
	return array.reduce((acc, element) => acc + (element ** 2), 0);
}

console.log(sumOfSquares(array)); // => 83