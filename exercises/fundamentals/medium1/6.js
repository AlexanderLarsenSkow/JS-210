function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status); // has access to status, which has visible scope of function
  }

  logger(); // calling logger which logs status variable to console.
}

debugIt(); // calling debugIt.

// This code logs the string 'debugging' because of the scope of variables defined with the 
	// `const` keyword. They have a declared block scope, but because `status` is declared at the top
	// level scope of the function, it effectively has function scope and is available for use in any
	// nested function or block inside debugIt.