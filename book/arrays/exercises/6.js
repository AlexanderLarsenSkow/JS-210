let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
	lengths = array.map(element => element.length);
	return lengths.filter(length => length % 2 === 1);
}

console.log(oddLengths(arr)); // => [1, 5, 3]