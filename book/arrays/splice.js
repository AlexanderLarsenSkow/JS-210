// splice() removes specified element(s) at the index specified and returns them in a new deleted
// array.

let array = [1, 2, 3, 4, 5];

array.splice(3, 1); // remove the 4th element. Only 1 element removed.

console.log(array) // [1, 2, 3, 5]

array.splice(0, 2); // remove the first element plus the second.

console.log(array) // [3, 5]