let bar = 1;

function foo() {
	let bar = 2;
}

foo(); // undefined
console.log(bar) // 1;

// Executing the foo function does not affect the output at the bottom because the function
// does not reassign the value of the variable bar. Instead, it assigns a new local variable bar.
// This is an example of variable shadowing.