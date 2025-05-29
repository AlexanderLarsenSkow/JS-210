let array = [];

array = [1, 2, 3];

array = ['hello', 1, true, null, undefined, NaN];

// arrays can hold all types of data.

// Can also use Array constructor:

let arr = new Array(1, 2, 3)
console.log(arr); // [1, 2, 3]

// Arrays are objects first: Use Array.prototype.isArray(obj) to determine if it's an array:

console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true