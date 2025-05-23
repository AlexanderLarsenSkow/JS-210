function foo(bar) {
	console.log(bar, bar, bar);
}

let bar = foo;

foo('hello'); // hello hello hello
bar('hi') // hi hi hi