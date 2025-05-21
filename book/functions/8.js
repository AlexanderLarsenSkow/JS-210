function foo(foo, bar) {
	console.log(foo);
	console.log(bar);
}

foo(42, 3.1415, 22); // logs 42, 3.1415

// The function has more arguments than parameters, so the first 2 arguments are output
// but the third argument, 22, is not used at all. There is no error.