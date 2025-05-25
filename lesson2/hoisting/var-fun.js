function foo() {
	var a = 'abc';
	console.log(global.a) // undefined
}

foo()