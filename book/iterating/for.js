/* for (initialization; condition, increment) {
	loop body
}
*/

// a for loop creates its own scope inside the brackets / block.

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index++) {
	let upperName = names[index].toUpperCase();
	upperNames.push(upperName);
}

console.log(upperNames);