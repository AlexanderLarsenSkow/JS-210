const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

/*
	false is the return value of this expression because objects are only ever equal in JS
		when they are the same object. because person and otherPerson reference two different
		objects, they are not equal, according to JS.
*/

// Refactoring:

console.log(person.name === otherPerson.name);    // true

// this version checks for value equality between the objects referenced by the name property in each
	// object.

	
