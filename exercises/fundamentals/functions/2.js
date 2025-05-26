var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local'; // variable shadowing
  console.log(myVar); // searches for local variable FIRST.
}

someFunction(); // outputs the string: This is local

/*
	Despite the fact that myVar is initialized in the global scope with var to reference 'This is global',
		it is not output when myVar is logged to the console in the function definition of someFunction().
		This is because a local variable that shares the same name (myVar) is initialized inside the body
		of the function before log() is called on the console. The local myVar references 'This is local',
		which is the result of the output.

	There are a few things going on here:

	First, this demonstrates variable shadowing, as myVar shadows the global variable in the outer
		scope. It is a separate variable, not the same one.

	Second, this demonstrates the hierarchy of scoping rules and variable searches in JavaScript:
		as the scope is lexical, JS first searches the local scope for the variable and only goes up
		the hierarchy (toward the outer-most scope) if it cannot find the reference initialization / 
		definition. In this case, JS searches the function body for the initialization of myVar, finds it,
		then outputs its reference.
*/