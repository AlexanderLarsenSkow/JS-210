/*
	Write a function that takes a positive int as an arg, and logs all odd nums from 1 to the number
	to the console.

	should be each to a line.

	Alg:
		use for loop to log each number. start the count at 1. Add 2. Log all numbers.
*/

function oddNumbers(max) {
	for (let count = 1; count <= max; count += 2) {
		console.log(count);
	}
}

oddNumbers(19);

function oddNumbers2(max) {
	for (let count = 0; count <= max; count ++) {
		if (count % 2 == 0) continue;

		console.log(count);
	}
}

oddNumbers2(19);