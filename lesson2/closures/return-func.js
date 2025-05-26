// First Order Functions can be
	// returned by other functions.
	// passed into other functions.
	// assigned to be referenced by variables.

function foo() {
	let name = 'Pete';
	return function() { // function returned by foo()
		console.log(name);
	}
}

let printPete = foo(); // variable references anonymous function returned by foo()
printPete();