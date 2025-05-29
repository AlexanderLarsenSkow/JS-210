// Join array Manually.
// ['a', 1, 4] becomes 'a14';

function join(array) {
	let string = '';

	for (let i = 0; i < array.length; i++) {
		let char = String(array[i]);
		string += char;
	}

	return string;
}

console.log(join(['a', 1, 4]));
console.log(join(['a', 'b', 'c', 'd']));