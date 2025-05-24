let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // [1, 4, 3]

// Variables as Pointers: array2 also references the same array that array1 references.
// They have the same pointer and the array is mutated by line 3.