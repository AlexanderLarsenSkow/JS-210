function foo(bar, qux) {
	console.log(bar);
	console.log(qux);
}

foo('Hello'); // 'Hello', undefined

// This function outputs the string 'Hello', then undefined from line 3.
// This is because no argument is passed in for the qux parameter, so it is undefined in
// the declaration.