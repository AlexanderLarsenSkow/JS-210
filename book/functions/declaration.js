// You do not have to declare functions before you call them in JS. Interesting.

greetPeople();

function greetPeople() {
	console.log('Hello  There!');
}

// Function Expression
// This type of function cannot be called before declaration.

let greetPeople2 = function() {
	console.log('Good Morning!');
}

greetPeople2()

// Arrow Functions
// like function expressions but have differences
// have an implicit return value.

let greetPeople3 = () => console.log("Good Night!");

greetPeople3();