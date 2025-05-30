// Arrays are Objects!

let a = ['hello', 'world'];

console.log(typeof a); // object
console.log(a['1']); // 'world'
console.log(Object.keys(a)); // ['0', '1']

let b = {
	0: 'hello',
	1: 'world',
}

console.log(typeof b); // object
console.log(b['1']); // 'world'
console.log(Object.keys(b)); // ['0', '1']
