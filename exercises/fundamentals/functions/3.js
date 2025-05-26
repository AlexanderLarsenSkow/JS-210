var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local'; // reassignment
}

someFunction(); // calling the function triggers reassignment
console.log(myVar); // output: This is local

/*
	This example is similar to the last one, except when myVar is referenced inside the body of the 
		function, it instead reassigns the value of the global variable rather than initializing a new one
		in the local scope. In this case, calling the function causes myVar to reference a new value:
		'This is local'.

	Logging myVar to the console results in the output: 'This is local' for this reason.

	This demonstrates global scoping rules in JavaScript. Any variable, whether it be with var, let, or
		const, that is initialized in the global scope (outside of a function, block, or class) will
		have global scope and be available for use within any function or block. MyVar is also enclosed
		by SomeFunction(), demnonstrating that the function is a closure. Though it can be entirely explained
		with scope.
*/