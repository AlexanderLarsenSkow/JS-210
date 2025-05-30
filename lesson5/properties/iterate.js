// Objects are collections, so can be iterated through with for..in loops

let nicknames = {
	joeseph: 'joey',
	margaret: 'maggie',
};

// variables in the for..in loop is the key. 

// have to use bracket notation here as this is a reference to the key.

for (let nick in nicknames) {
	console.log(nick); // joseph margaret
	console.log(nicknames[nick]); // joey maggie
}

// Object.keys returns keys in an array:

console.log(Object.keys(nicknames)); // ['joseph', 'margaret']


