// You can use Object Operations on Arrays, but it's a bad idea.

// in: returns true or false based on if an object has a key.

console.log(0 in []); // false
console.log(0 in [1]); // true

// This is better:

let numbers = [4, 8, 1, 3];
console.log(2 < numbers.length);

// can also use delete, but better to use splice if you want to remove something.