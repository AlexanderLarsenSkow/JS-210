/*
	input: two arrays
	output: true or false, depending on if the arrays have value equality (index positino doesn't matter)

	sum them and if they sum to teh same thing, they have value equality.
*/

function reduceIt(array) {
	reduction = array.reduce(function(storage, element) {
		if (typeof element === 'string') {
			storage[1] += element;
		} else {
			storage[0] += element;
		}

		return storage;
	}, [0, ''])

	reduction[1] = reduction[1].split('').sort().join('');
	return reduction;
}

function areArraysEqual(array1, array2) {
	array1 = reduceIt(array1);
	array2 = reduceIt(array2);

	for(let i = 0; i < array1.length; i++) {
		if(array1[i] !== array2[i]) return false;
	}

	return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]) === true);              // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]) === true);             // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']) === true);      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]) === false);             // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]) === true);            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]) === false);            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]) === false);            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]) === false);             // false
console.log(areArraysEqual([1, 1, 1], [1, 1]) === false);            // false
console.log(areArraysEqual([1, 1], [1, 1]) === true)           // true
console.log(areArraysEqual([1, '1'], ['1', 1]) === true)             // true