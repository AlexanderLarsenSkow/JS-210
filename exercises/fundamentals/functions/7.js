let a = 7;

function myValue(a) {
  a += 10; // shadowing
}

myValue(a); // returns undefined
console.log(a); // 7

/*
	This problem is quite similar to the last one. global variable `a` is assigned to reference the
	number 7 on line 1. `a` is then passed into the function myValue() on line 7, which takes 1 parameter
	`a` and uses reassignment addition to add 10 to its value.

	However, when outputting `a` on line 8, 7 is still output. Part of this is because `a` inside the
	function body is a parameter / local variable that shadows the global variable. This demonstrates
	the JS search path for variables (it starts in the local scope and works its way up) and also
	that reassignment of a parameter referencing a primitive value can never mutate that value.

	In essence this an example of pass by value and variable shadowing in JS.
*/