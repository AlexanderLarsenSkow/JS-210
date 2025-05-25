// It can be useful to create names for function expressions like this
	// it will tell you in the call stack an error occurred within the specific function
	// rather than an anonymous function.	

let hello = function foo() {
	console.log(typeof foo); // function
}

hello() // function

foo() // ReferenceError: foo is not defined.