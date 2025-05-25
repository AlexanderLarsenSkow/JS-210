// Declaring a function also creates a variable with that function name.
// The function is assigned to that variable.

let stringVar = 'string value';
let numberVar = 42;

function functionVar() {
	return 'function reference';
}

console.log(typeof stringVar) // string
console.log(typeof numberVar) // number
console.log(typeof functionVar) // function

// Just like other variables, we can reassign other variables to reference these functions.
// we can even take the variable referencing the function and reassign it to something else.

stringVar = functionVar;
functionVar = 'string value';

console.log(typeof stringVar) // function
console.log(typeof functionVar) // string

functionVar(); // TypeError: functionVar is not a function