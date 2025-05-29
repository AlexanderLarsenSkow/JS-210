// Before iterating, get length:

let count = [1, 2, 3];
let length = count.length;

console.log(length); // 3

for (let i = 0; i < count.length; i++) {
	console.log(count[i]); // 1 2 3
}

// brackets continue to be an operator here. Not a method like in Ruby.