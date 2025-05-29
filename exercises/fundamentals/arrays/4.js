/*
Concat Part 2:

Problem:
	refactor previous concat function to take as many arguments as possible.
	first argument should still be array.	

	use rest parameters ...restParameters, allows for infinite parameters. puts them in an array.
	
*/

function addArrays(result, array2) {
	for (let index = 0; index < array2.length; index++) {
		result.push(array2[index]);
	}

	return result;
}

function concat(array1, ...args) {
	let result = array1.slice();

	args.forEach(function(argument) {
		if (Array.isArray(argument)) {
			addArrays(result, argument);
		} else {
			result.push(argument);
		}
	})

	return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]