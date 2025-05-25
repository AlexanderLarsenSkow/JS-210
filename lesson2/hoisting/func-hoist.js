// function hoisting: JS takes the function name and body.

console.log(hello());

function hello() {
	return 'hello!'
}

// function declarations have function scope. Hoisting occurs with nested functions as well.
	// defining bar() before it is called inside foo() is possible because of hoisting.

function foo() {
	return bar();

	function bar() {
		console.log('I am returned before my time.')
	}
}

foo();

// Function Expressions and Hoisting
	// same rules for variables, shouldn't work.

console.log(hello2()) // TypeError: hello2 is not a function

var hello2 = function () {
	return 'hello!'
};