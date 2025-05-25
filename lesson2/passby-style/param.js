// Changing a parameter's/local var's reference (reassigning) doesn't affect outer var passed in.

function changeName(name) {
	name = 'Bob'; // This reassignment doesn't affect the outer variables.
}

function anotherFunction() {
	let name = 'Jim';
	changeName(name);
	console.log(name) // Jim
}

anotherFunction()