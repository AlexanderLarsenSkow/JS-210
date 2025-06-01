/*
	input: 2 arrays
	output: combined array with no duplicates.

	example:
	union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
		both arrays have 3, but the union has 3 once.
	// 

	If the new array doesn't have the value, add it. else do nothing.
	*/

function addElements(result, array) {
	array.forEach(function(number) {
		if (!result.includes(number)) {
			result.push(number);
		}
	})

	return result;
}

function union(array1, array2) {
	let combinedArray = [];

	addElements(combinedArray, array1);
	addElements(combinedArray, array2);

	return combinedArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

function uniq(array) {
	let uniq = [];

	array.forEach(function(number) {
		if (!uniq.includes(number)) {
			uniq.push(number);
		}
	})

	return uniq;
}

function union2(array1, array2) {
	let combined = array1.concat(array2);
	return uniq(combined);
}


console.log(union2([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
