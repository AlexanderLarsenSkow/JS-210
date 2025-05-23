const myArr = Object.freeze([1, 2, 3]);

console.log(myArr);

myArr[0] = 4; // nothing happens.

console.log(myArr); // [1, 2, 3]

// Freeze only works one level deep. Doesn't do anything if you have a nested array structure.