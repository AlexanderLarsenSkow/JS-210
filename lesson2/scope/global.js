// variables initialized outside of a block or function scope are globally scoped. Available anywhere.

// myName is locally scoped, however, to greet()

let name = 'Julian';

function greet() {
	let myName = name;
	console.log(myName);
}

greet();

// Even nested functions can access these variables.

function say() {
	function hello() {
		console.log(`Hello ${name}!`)
	}
	hello();
}

say();
