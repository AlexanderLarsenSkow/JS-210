/*
	input: array of integers
	output: take averaeg of all integers rounded down.
*/

function average(integers) {
	let sum = integers.reduce((total, int) => total + int, 0);
	return Math.floor((sum / integers.length));
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40