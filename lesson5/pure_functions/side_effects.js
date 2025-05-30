/*
Function calls that do any of these following things have side effects:

	- reassigns any non local variable.
	- mutates the value of an object referenced by non local variable (is possible)
	- reads from or writes to any data entity (files, network conn,) that is non local.
	- raises an exception
	- calls another function or method that has side-effects.

	anything that causes JS to look outside of the function is a side effect.
*/

function call(argument) {
	return argument[0]; // only retrieving. This function doesn't have side effects.
}

console.log(call([10])); // 10
// console.log(call()) // TypeError exception, this call has side effects.


// Reassignment Side Effects:

let number = 42;
function incrementNumber() {
  number += 1; // side effect: number is defined in outer scope
}

incrementNumber();
console.log(number); // 43

// Mutation Side Effects:

let letters = ['a', 'b', 'c'];
function removeLast() {
  letters.pop(); // side effect: alters the array referenced by letters
}

removeLast();
console.log(letters); // ['a', 'b']

// I/O, such as logging to console, reading keyboard input, and Math.random() are also side effects:

let rand = Math.random(); // side effect.

// Exceptions

// This function handles the exception. Any unhandled exception, like in the example above, is
	// a side effect.

function divideBy(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Divide by zero!"); // side effect: raises an exception
  }

  return numerator / denominator;
}