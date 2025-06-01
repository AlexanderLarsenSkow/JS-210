/*
	input: integer
	output: array containing all integers between 1 inclusive and the argument

	Examples:
	sequence(5);    // [1, 2, 3, 4, 5]
	sequence(3);    // [1, 2, 3]
	sequence(1);    // [1]

start a loop at 1 and go the number.
*/

function sequence(max) {
	let numberSeq = [];

	for(let count = 1; count <= max; count++) {
		numberSeq.push(count);
	}

	return numberSeq;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]