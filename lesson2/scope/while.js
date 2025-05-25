/*
	3 Scopes Here:
		1. Global Scope where name is initialized.
		2. Function scope for greet()
		3. block scope of block used for while loop in greet()

		These can also be called local scopes.
*/

let name = 'Julian';

function greet() {
	let counter = 0;

	while(counter < 3) {
		let myName = name;
		console.log(myName);
		counter += 1;
	}
	console.log(counter);
}

greet();
