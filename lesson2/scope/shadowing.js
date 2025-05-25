// Example of Variable Shadowing. One in global scope and another in function scope.

let name = 'Julian';

function greet() {
	let name = 'Logan';
	console.log(name) // JS looks for name in local scope first, finds name referencing 'Logan'
}

greet();

// Can also happen with parameters: 

function stupid(name) {
	console.log(name)
}

stupid('Jonathan') // Johnathan