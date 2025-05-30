// Arrays can be sparse: there can be a long length but few elements.

let array = [1];
array.length = 5;
console.log(array); // [1, <4 empty items>]
console.log(array.length); // 5


console.log(array[2]); // undefined
console.log(array.indexOf(undefined)); // -1, not there

// The length is 5, but there is really only 1 element in this array.