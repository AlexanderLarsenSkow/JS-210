// oddLengths with reduce()

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
	let oddLengths = []

	return array.reduce(function(array, string) {
		let length = string.length
		if (length % 2 === 1) {
			array.push(length);
		}
		return array;
	}, oddLengths)

}

console.log(oddLengths(arr)); // => [1, 5, 3]