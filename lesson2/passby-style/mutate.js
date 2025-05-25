// This is a mutating action on the array passed into capitalize().
	// here, JS looks like pass by reference.

function capitalize(names) {
	for(let index = 0; index < names.length; index++) {
		names[index] = names[index][0].toUpperCase() + names[index].slice(1)
	}
}

let names = ['chris', 'kevin', 'bacon'];
capitalize(names);
console.log(names) // ['Chris', 'Kevin', 'Bacon']

