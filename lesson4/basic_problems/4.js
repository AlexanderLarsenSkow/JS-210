// Yes, we can insert data at a negative index into an array.
// This creates a custom key in the array, because it is an object.

let array = [1, 2, 3];
array[-1] = 20;

console.log(array); // [1, 2, 3, '-1': 20]
console.log(array['-1']); // 20

// this is part of the array but it's addition does not change the length at all o.O

console.log(array.length); // 3, not 4