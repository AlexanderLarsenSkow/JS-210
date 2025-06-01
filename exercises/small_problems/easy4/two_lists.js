
function interLeave(array1, array2) {
	let alternatingArray = [];

	for(let i = 0; i < array1.length; i++) {
		alternatingArray.push(array1[i], array2[i]);
	}

	return alternatingArray;
}

console.log(interLeave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]