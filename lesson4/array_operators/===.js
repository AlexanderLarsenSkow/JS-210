// You'd think that === would return true for an array, right?

// WRONG!

let friends = ['Bob', 'Josie', 'Sam'];
let enemies = ['Bob', 'Josie', 'Sam'];

console.log(friends == enemies); // false
console.log(friends === enemies); // false

console.log(friends === friends); // true
console.log(friends === enemies); // true

// === only tests for object equality, not value equality with arrays. -_-

let roomates = friends;

console.log(friends === roomates); // same object, returns true.