let numbers = [1, 2, 3];

function printNumbers() {
	console.log(numbers); // numbers is within the lexical scope for PrintNumbers()
}

printNumbers(); // [1, 2, 3]

numbers = [4, 5];
printNumbers // [4, 5] // value is dragged. 

/* JS Variable Lookup Path:
	Looks first in local scope, then goes up the hierarchy (lexical scope) searching for the variable.
		looks for the closure if it can't find a local variable.

*/