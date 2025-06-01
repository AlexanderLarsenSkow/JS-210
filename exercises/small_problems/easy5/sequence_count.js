/*
	input: two integers
	output: array with same number of elements as count

	Rules:
		- first arg is count
		- second arg is starting number of sequence
		- value of each number in sequence is multiple of start number.
		- count 0 ? return empty array.

	Examples:
		sequence(5, 1);          // [1, 2, 3, 4, 5], count of 5, starting num 1. multiples of 1
	sequence(4, -7);         // [-7, -14, -21, -28] count 4, starting num -7
	sequence(3, 0);          // [0, 0, 0], starting num 0 multiples of 0
	sequence(0, 1000000);    // []

	data structures:
		retrun array sequence

	algo:
		start the count at 0, go until equal to number.
		continue to add the startNum to the count as well.

	*/

	function sequence(count, startNum) {
		let numSequence = [];
		let increment = startNum;

		for (let num = 0; num < count; num++) {
			numSequence.push(increment);
			increment += startNum;
		}

		return numSequence;
	}

console.log(	sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []