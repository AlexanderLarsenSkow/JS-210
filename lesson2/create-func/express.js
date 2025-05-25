// Function Expressions

// hello references anonymous function here.

const hello = function() {
	return 'hello';
}

console.log(typeof hello) // function
console.log(hello()) // hello

// Another Example:

let foo = function() {
	return function() {
		return 1;
	}
}

console.log(typeof foo()) // function

let bar = foo() // now bar references the returned function from foo.

console.log(bar()) // 1