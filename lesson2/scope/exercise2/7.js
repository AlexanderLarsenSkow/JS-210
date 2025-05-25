let a = 1;

function foo() {
	a = 2;
	let bar = function() {
		a = 3;
		return 4;
	};

	return bar();
}

console.log(foo()); // 4
console.log(a); // 3

// a is reassinged to 3 inside the bar() function expression. because it is globally available, it
	// is available to every local scope, no matter how nested.