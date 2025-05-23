// Iterate over an object's keys with for - in loops

let person = {
	name: 'Bob',
	age: 30,
	height: '6 ft'
};

 // prop here references each key in the iteration through `person`
 // have to use bracket notation here since `prop` is a variable. no dot noation.

for (let prop in person) {
	console.log(person[prop]); // Bob	 30	 6 ft
}

// downsides of prototypes:

// for - loops will also iterate over the elements of prototypes LMFAO

let obj1 = {a: 1, b: 2};
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for(let prop in obj2) {
	console.log(obj2[prop]); // 3, 4, 1, 2
}

// use hasOwnProperty() to get around this.

for(let prop in obj2) {
	if (obj2.hasOwnProperty(prop)) {
		console.log(obj2[prop]); // 3 4
	}
};