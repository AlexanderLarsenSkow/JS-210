// primitive values are never mutated. Pass by Value everytime it's a primitive.

function cap(name) {
	return name.toUpperCase();
}

let myName = 'jake';
cap(myName) // returns 'Jake'
console.log(myName) // jake # not capitalized