function hello() {
	a = 'hi'; // bad practice
}

hello(); // initializes a. No let, var, or const creates global variable.
console.log(a); // hi