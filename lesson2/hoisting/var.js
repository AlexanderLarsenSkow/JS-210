// var looks similar to let and const, but behaves differently.

var moo; // undefined value
var xar = 'qux'; // references 'qux'

// Example 1: Global Object

var bar = 42;
console.log(global.bar); // 42
bar += 1;
console.log(global.bar) // 43

let foo = 86;
console.log(global.foo) // undefined 

// creating a variable with var at the top level adds a property to the global object o.O
	// this behavior can create bugs. Let does not do this; it is safer.
