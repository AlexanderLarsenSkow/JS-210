let fibonacci = [0, 1, 2, 3, 5, 8, 13];

// Arrays are 0 indexed like in Ruby.

console.log(fibonacci[0]); // 0
console.log(fibonacci[5]); // 8
console.log(fibonacci[2]); // 2

// Trying to access values longer than the array will return undefined:

console.log(fibonacci[fibonacci.length]); // undefined