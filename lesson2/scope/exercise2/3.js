function hello() {
	a = 'hello'; // actually reassigns var a, which is locally scoped to the function
	console.log(a); // hello

	if(true) {
		var a = 'hello again';
	}
}

hello(); // outputs hello
// console.log(a); // ReferenceError ? 

// logging a to the console on line 11 results in a Reference Error
	// This is because line 2 is reassignment, as local var a is initialized in the creation phase
	// then reassigned to reference 'hello' afterwards. it is never assigned to reference hello again
	// because of the false expression tied to the if statement.
	// Thus, a is not globally available, only locally, resulting in a ReferenceError.