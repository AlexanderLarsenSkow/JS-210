// Getting the Last Element: use length - 1

// function lastInArray(array) {
// 	let length = array.length;
// 	return array[length - 1];
// }

const lastInArray = array => array[array.length -1];

let array = [1, 2, 3];

console.log(lastInArray(array) === 3);