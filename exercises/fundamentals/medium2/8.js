function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // Welcome
    anotherOne(116, 111); // to
  }

  anotherAnotherOne(); // Welcome to	
  anotherOne(116, 104, 101); // the
  return anotherOne; // returning function
}

one()(77, 97, 116, 114, 105, 120, 33); // Matrix!

// Welcome to the Matrix! is logged.

/*
	This code demonstrates nested functions and the fact that we can use functions
		to return other functions. In this case, the function calls at the end of the 
		one function log different strings to the console:

	anotehrAnotherOne() logs Welcome to
	anotherOne(116, 104, 101) logs the
	Then, in the final line, one returns the function anotherOne, uncalled.

	one() is called and the result is passed several arguments, that log the string Matrix!

	The entire output at the end is:
	Welcome
	to
	the
	Matrix!
*/