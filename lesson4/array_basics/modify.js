// Adding Values:

let count = [1, 2, 3];
count[3] = 4;
console.log(count); // [1, 2, 3, 4]
console.log(count.length); // 4

// Change a value in the array:

count[0] = 10;
console.log(count); // [10, 2, 3, 4]

// Changing the length of the array:

count.length = 10;
console.log(count); // [10, 2, 3, 4 <6 empty items>]