// Always Return Negative

/*
	input: number
	output: positive? return negative. else, negative.

	if 0, return 0.
*/

function negative(number) {
	return number > 0 ? -number : number;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0