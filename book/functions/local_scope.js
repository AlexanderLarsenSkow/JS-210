function greetPeople() {
	let greeting = 'Hello there!';
	console.log(greeting);
}

greetPeople();
greeting // referencing the local var outside of its scope results in a ReferenceError.