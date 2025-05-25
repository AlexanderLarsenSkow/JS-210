function say() {
	if(false) {
		let a = 'Hello from the block';
	}

	console.log(a); // ReferenceError: a is not defined
}

say();

// This results in a ReferenceError, since variable a is declared with let it only has 
	// scope local to the block it is declared in.