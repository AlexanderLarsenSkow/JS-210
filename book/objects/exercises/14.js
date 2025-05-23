function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

/*
Variables:
	greeting, name
	howdy, foo, hello, xyzzy

Object Property Names:
	a, b, c, d
	0, 1, 2 as property names in array

Primitive Values:
	' ', 1, 2, 3, 4, 5, 'Hi', 'Grace'

Objects: 
	hello function, xyzzy function, { a: 1, b: 2, c: [3, 4, 5], d: {} }
	[3, 4, 5], {}	

*/