console.log(a); // ReferenceError: a is not defined

function hello() {
	a = 1;
}

// The global variable is not initialized unless hello() is called BEFORE a is logged to the console.
	// As such, it is undefined.