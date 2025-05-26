console.log(a); // undefined

var a = 1;

/*
	This results in outputting undefined to the console. This is because of the creation phase in JavaScript:
		any variable with function scope (var variables, function variables, class names, etc.) are noted
		in the creation phase before execution begins. In this case, Javascript notes that `a` is
		initialized, but does not check the value it references.

		As such, when `a` is output to the console before it is defined, as in this case, it outputs
		`undefined`, rather than throwing a ReferenceError or outputting the actual value of the variable.

		This can also be explained through the mental model of hoisting, where the variable initialization
		is written first (this does not actually happen; it is only a model for learning):

		var a;
		console.log(a);
		a = 1;
*/

