// counter is in the lexical scope for incrementCounter
	// This example is probably too simple to properly illustrate a closure.

// let counter = 0;

// function incrementCounter() {
// 	counter += 1;
// }

// incrementCounter();
// incrementCounter();
// console.log(counter); // 2

// A better example:

function makeCounter() {
	let counter = 0;

	return function() {
		counter += 1;
		return counter;
	}
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()) // 2

// counter is now a local variable. Data protection is a lot of why returning functions are useful.