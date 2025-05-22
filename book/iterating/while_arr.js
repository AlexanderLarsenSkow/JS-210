let array = ['Abby', 'Jake', 'Sam']
let index = 0;

while (index < array.length) {
	console.log(array[index]) // print the element in the array at the current index.
	index ++
}

let bigNames = []
index = 0;

while (index < array.length) {
	let bigName = array[index].toUpperCase();
	bigNames.push(bigName);

	index ++;
}

console.log(bigNames);

// .size is not an Array method here. Must use .length