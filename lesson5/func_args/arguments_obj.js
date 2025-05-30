// arguments object

// Array -like object local variable that is available inside all function.

// includes all arguments passed to the function, even if more than defined.

function logArgs(a) {
	console.log(arguments[0]); // 'a'
	console.log(arguments[1]); // 1
	console.log(arguments.length); // 2
}

logArgs('a', 1);

// arguments includes all the arguments passed to the function, even defined ones.

/*
	However, arguments doesn't have usual array methods, is an object, and isn't even counted
		as an array.

	Use this call to create an array out of the arguments array:
		let args = Array.prototype.slice.call(arguments);
*/

function logArgs2() {
	let args = Array.prototype.slice.call(arguments);
	console.log(typeof args) // object
	console.log(Array.isArray(args)); // true
	args.pop(); // this function works because args is a proper array.
}

logArgs2(1, 2, 3);