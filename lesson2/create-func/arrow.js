// These functions do the same thing, but the arrow notation on line 7 is simpler and easier to read.

// basic function expression

const multiply1 = function(a, b) {
	return a * b;
}

// arrow syntax with more than 1 line

const multiply2 = (a, b) => {
	return a * b;
}

// When the arrow function is only 1 line, brackets and return keyword not required:
	// typical for callback functions

const multiply = (a, b) => a * b;

// Callback Example:

console.log([1, 2, 3].map(element => element * 2)); // [2, 4, 6]
