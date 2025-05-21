let foo = 'bar';

{
	let foo = 'qux';
	console.log(foo)
}

console.log(foo)

// line 7 will print the value referenced by the variable foo, which is the string bar (assigned) on
 // line 1. Because the let statement is used on line 4, it initializes a new variable.
 // This is variable shadowing in JavaScript, where two variables with the same name can be
 // used if one of them is initialized inside a block. 