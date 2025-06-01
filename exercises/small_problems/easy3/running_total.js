/*
	input: array
	output: new array, where each value is the running total of the previous array.

	rules:
		continue to add the values together.
		first value should always be the same, but the second should be first and second added together.
*/

function runningTotal(numbers) {
	let runner = 0;
	return numbers.map(number => runner += number);
}

console.log(	runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []