// What side effects are present in this code?

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); // removing global variable element
  console.log(`popped ${value} from the array`); // logging to the console.
  return value + bar + baz; // no mutation, no side effect here.
}

foo(qux);

/*
This code has two main side effects:
	- it passed the qux array into the foo function as an argument, which removes its last element
		with pop().
	- it logs the popped value into a string that is then output in the console.
	- This demonstrates a mixing of return value with side effects.

	calling pop() does not create side effects, because it is contained to this program.
	Calling console.log() does have side effects.
*/