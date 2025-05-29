/*
	input: array where numbers are missing.
	output: new array with all missing numbers in order between first and last element

	Rules:
		not returning any element from the original array, only the numbers missing.
		if nothing missing, return empty array.
		if only 1 element in array, return nothing.

Examples:
missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // [] // nothing missing
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // [] 1 element

data structures:
	start at the first number, count up til you reach the last number.
	if the original array includes the current element, don't add it to the new array.
*/

function missing(numbers) {
	let count = numbers[0];
	let length = numbers.length;
	const endNum = numbers[length - 1];

	let missing = [];

	while (count <= endNum) {
		if (!numbers.includes(count)) {
			missing.push(count);
		}

		count++;
	}
	
	return missing;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []