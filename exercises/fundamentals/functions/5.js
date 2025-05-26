function someFunction() {
  myVar = 'This is global';
}

someFunction(); // creating global variable myVar
console.log(myVar); // This is global

/*
	The result of this code snippet is the output: This is global. This is because, within the function
		body of someFunction(), myVar is initialized without any keyword (neither let, const, or var are used.)
		In this case, then, what happens is myVar becomes a global variable that changes the global object.
		It is not a property of the global object. As such, creating the global variable inside the function
		makes it available anywhere within the program, hence the resulting output.
*/