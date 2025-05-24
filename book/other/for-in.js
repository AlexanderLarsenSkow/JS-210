let obj = {foo: 1, bar: 2, qux: 'c'};
for(let key in obj) {
	console.log(key);
}

// Arrays

let array = [10, 20, 30];
for(let index in array) {
	console.log(index); // prints the index
}

for(let index in array) {
	console.log(array[index]); // print elements 10 20 30
}

// Iterating over an array with for in is a bad idea because they're strings.
for (let index in array) {
	console.log(index + 5); // strings '05', '15', '25'
}