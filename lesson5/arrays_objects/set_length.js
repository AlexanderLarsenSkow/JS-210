let myArray = [1, 2, 3];
console.log(myArray.length); // 3


// Resetting the length to a higher value adds empty elements:
myArray.length = 5;
console.log(myArray); // [1, 2, 3, <2 empty items>]

// Adding an element at an index greater than the length adds more empty items:
myArray[6] = 10;

console.log(myArray); // [1, 2, 3, <3 empty items>, 10]
console.log(myArray.length); // 7

// Setting the length to a smaller value mutates and REMOVES values:

myArray.length = 2;
console.log(myArray); // [1, 2]