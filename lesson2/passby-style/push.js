// Even using the reassignment, push is still called on the reference, which is mutating.

function addNames(names, newName) {
	return names = names.push(newName)
}

names = ['Alex', 'Taylor'];
addNames(names, 'Heather');
console.log(names); // ['Alex', 'Taylor', 'Heather']