function hello() {
	let a = 'hi';
}

hello(); // creates a local varaible a, undefined return value.
console.log(a); // ReferenceError: a is locally scoped to hello()