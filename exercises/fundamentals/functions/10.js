logValue(); // Hello, World!

function logValue() {
  console.log('Hello, world!');
}

/*
	The output here is 'Hello, World!'. This is because, during the creation phase in JavaScript, all
	variables referencing functions are noted. It can also be thought of as being hoisted on top of the
	program, where the function name and body are available at the very top even though they are defined
	after the function call.

	In this case, during execution, JavaScript knows that logValue() references a known function and
	it knows the function body as well. So, Hello, World is output one line 1.

	Based on the hoisting mental model, this code could be rewritten as:

	function logValue() {
	  console.log('Hello, world!');
	}

	logValue();
	
*/

// Further Exploration: 