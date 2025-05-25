// functions obey JS variable scoping rules and can be used the same way.

function hello() {
	return 'hello world.'
}

console.log(typeof(hello())) // 'string' logging the type of the function return value.
console.log(typeof hello) // function, logging the type of the variable hello.

// Another Example:

function outer() {
	function hello2() {
		return 'hello world.';
	}
	return hello2();
}

const foo = outer;
console.log(foo()) // hello world.

console.log(hello2()) // can't access locally scoped hello function name here.