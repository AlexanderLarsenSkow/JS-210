// This code runs because getName function declaration is hoisted to the top of the program.

console.log(getName());

function getName() {
	return 'Alex';
}

// Temporal Dead Zone

// var hoisting: var is hoisted with a value of undefined.

console.log(bar); // trying to access bar before it has been declared returns undefined.
var bar = 3;
console.log(bar); // 3

// let and const hoisting throws exceptions:

console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
let foo = '1';