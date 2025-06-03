/*
	input: 5 string arguments
	output: returns an object with 3 properties

		- first: the last argument
		- last: the last argument
		- middle: the middle 3 arguments in a sorted array.

	Rules:
		call the function
		args for the call should come from array
		create variables first, last and middle from return value.

		destructuring assignment, rest parameters, etc.
*/

function shortenIt(first, last, ...middle) {
	let sortedMiddle = middle.sort();

	return {
		first,
		last,
		middle: sortedMiddle,
	}
}

let array = ['a', 'b', 'c', 'd', 'e'];

let result = shortenIt(array[0], array[array.length - 1], ...array.slice(1, -1));

console.log(result); // { first: 'a', last: 'e', middle: [ 'b', 'c', 'd' ] }

let {first, last, middle} = result;

console.log(first); // 'a'
console.log(last); // 'e'
console.log(middle); // [ 'b', 'c', 'd' ]