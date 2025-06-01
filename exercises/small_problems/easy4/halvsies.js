// halvsies

/*
	input: array
	output: array with two subarrays

	Rules:
		- split the values in the array into the two subarrays.
		- odd number of elements? place the middle element in first array.

	Examples:
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]] // dead even
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]] // middle is in first
halvsies([5]);                // [[5], []] // 1 element? first, second is empty.
halvsies([]);                 // [[], []]

< length / 2  => 5 / 2 => 2.5

	Data structures:
		for loop, two subarrays in big array.
	
	Algo:
		iterate through the array with a for loop.
		if hte index is less than the length / 2, add the element to the first half.
		Else, add it the second half.
		Place the halves in a big array and return it.
*/

function halvsies(array) {
	let firstHalf = [];
	let secondHalf = [];

	for(let index = 0; index < array.length; index++) {
		if (index < array.length / 2) {
			firstHalf.push(array[index]);
		} else {
			secondHalf.push(array[index]);
		}
	}

	return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

function halvsies2(array) {
	const half = Math.ceil(array.length / 2);
	let firstHalf = array.slice(0, half);
	let secondHalf = array.slice(half);

	return [firstHalf, secondHalf];
}

console.log(halvsies2([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies2([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies2([5]));                // [[5], []]
console.log(halvsies2([]));                 // [[], []]
